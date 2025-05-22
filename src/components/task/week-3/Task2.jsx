"use client";

import React from "react";
import CodeBlock from "../../common/components/CodeBlock";
const Task2 = () => {
  return (
    <div className="p-4 space-y-8 max-w-5xl mx-auto text-white">
      <h1 className="text-3xl font-bold">GSAP Setup for All Platforms</h1>

      {/* React Setup */}
      <CodeBlock
        filename="GsapComponent.jsx"
        language="jsx"
        code={`import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const GsapComponent = () => {
  const boxRef = useRef(null)

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 100,
      duration: 1,
      ease: 'power2.out',
    })
  }, [])

  return <div ref={boxRef} className="w-32 h-32 bg-green-500">GSAP Box</div>
}

export default GsapComponent`}
      />

      {/* Vue Setup */}
      <CodeBlock
        filename="GsapComponent.vue"
        language="html"
        code={`<template>
  <div ref="box" class="w-32 h-32 bg-green-500">GSAP Box</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const box = ref(null)

onMounted(() => {
  gsap.to(box.value, {
    x: 100,
    duration: 1,
    ease: 'power2.out',
  })
})
</script>`}
      />

      {/* Vanilla JS / HTML Setup */}
      <CodeBlock
        filename="index.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>GSAP Vanilla</title>
    <script src="https://unpkg.com/gsap@3/dist/gsap.min.js"></script>
    <style>
      #box {
        width: 100px;
        height: 100px;
        background: limegreen;
      }
    </style>
  </head>
  <body>
    <div id="box">GSAP Box</div>
    <script>
      gsap.to("#box", {
        x: 100,
        duration: 1,
        ease: "power2.out"
      })
    </script>
  </body>
</html>`}
      />
    </div>
  );
};

export default Task2;
