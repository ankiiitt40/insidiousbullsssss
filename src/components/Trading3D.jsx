import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Trading3D() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0.1)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 5

    // Create floating candles (candlestick shapes)
    const createCandle = (x, y, height, color) => {
      const group = new THREE.Group()
      
      // Wick
      const wickGeometry = new THREE.BoxGeometry(0.02, height * 0.5, 0.02)
      const wickMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
      const wick = new THREE.Mesh(wickGeometry, wickMaterial)
      wick.position.y = height * 0.25
      group.add(wick)

      // Body
      const bodyGeometry = new THREE.BoxGeometry(0.2, height, 0.05)
      const bodyMaterial = new THREE.MeshStandardMaterial({ color })
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
      group.add(body)

      group.position.set(x, y, 0)
      return group
    }

    // Add candles
    const candles = [
      createCandle(-3, 1, 0.5, 0x00ff99),
      createCandle(-1.5, 0.8, 0.7, 0x22d3ee),
      createCandle(0, 1.2, 0.4, 0x00ff99),
      createCandle(1.5, 0.9, 0.6, 0x22d3ee),
      createCandle(3, 1.1, 0.5, 0x00ff99),
    ]

    candles.forEach(candle => scene.add(candle))

    // Grid background
    const gridHelper = new THREE.GridHelper(20, 20, 0x00ff99, 0x1a2a40)
    gridHelper.position.y = -2
    scene.add(gridHelper)

    // Floating particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCnt = 300
    const posArray = new Float32Array(particlesCnt * 3)

    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00ff99,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Lighting
    const light = new THREE.PointLight(0x00ff99, 0.5)
    light.position.set(5, 5, 5)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight(0x22d3ee, 0.3)
    scene.add(ambientLight)

    // Animation loop
    let animationId
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      // Rotate candles
      candles.forEach((candle, idx) => {
        candle.rotation.y += 0.003
        candle.position.y += Math.sin(Date.now() * 0.001 + idx) * 0.0005
      })

      // Rotate particles
      particles.rotation.y += 0.0001
      particles.rotation.x += 0.00005

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      renderer.dispose()
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full absolute inset-0 rounded-2xl overflow-hidden"
      style={{ opacity: 0.6 }}
    />
  )
}
