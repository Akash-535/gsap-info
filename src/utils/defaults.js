export const GSAP_EASE = {
  explanationOf: "ease",
  explanation: [
    {
      type: "Power",
      base: "power",
      description:
        "The 'Power' eases offer a gradual progression from linear to more dramatic acceleration and deceleration. The higher the number, the more intense the curve. Great for general-purpose animations where you want to control how fast or slow something starts and ends.",
      variants: [
        {
          name: "power1.in",
          description:
            "Starts with a gentle acceleration — smooth and subtle, ideal for soft entrances.",
        },
        {
          name: "power1.out",
          description:
            "Starts fast and gently slows down — good for soft landings or fades.",
        },
        {
          name: "power1.inOut",
          description:
            "Combines a soft start and end — balanced motion that feels natural.",
        },
        {
          name: "power2.in",
          description:
            "Accelerates a bit harder than power1 — good for light movement buildup.",
        },
        {
          name: "power2.out",
          description:
            "Decelerates more strongly — works well when you want something to 'settle' in.",
        },
        {
          name: "power2.inOut",
          description:
            "Smooth on both ends with a bit more weight — nice for buttons or modals.",
        },
        {
          name: "power3.in",
          description:
            "Slow to start and faster into the motion — adds drama at the front.",
        },
        {
          name: "power3.out",
          description:
            "Begins fast and eases harder — great for attention-grabbing exits.",
        },
        {
          name: "power3.inOut",
          description:
            "Noticeably smooth and strong on both ends — powerful transitions.",
        },
        {
          name: "power4.in",
          description:
            "Extremely slow start with fast acceleration — feels like winding up before launch.",
        },
        {
          name: "power4.out",
          description:
            "Begins instantly and slams the brakes at the end — great for dramatic stops.",
        },
        {
          name: "power4.inOut",
          description: "Extreme curve at both ends — big visual energy.",
        },
      ],
    },
    {
      type: "Sine",
      base: "sine",
      description:
        "Sine easing is based on sine waves — very smooth and natural, perfect for gentle transitions.",
      variants: [
        {
          name: "sine.in",
          description:
            "Starts slow and speeds up softly — like a curtain being pulled open gently.",
        },
        {
          name: "sine.out",
          description:
            "Starts quickly and fades out slowly — great for subtle exits.",
        },
        {
          name: "sine.inOut",
          description:
            "Soft on both ends — the most balanced and calming feel.",
        },
      ],
    },
    {
      type: "Expo",
      base: "expo",
      description:
        "Exponential easing is extreme — it starts or ends *very* abruptly, creating high-energy motion.",
      variants: [
        {
          name: "expo.in",
          description:
            "Starts off extremely slow, then blasts into full speed — gives a rocket launch effect.",
        },
        {
          name: "expo.out",
          description:
            "Starts super fast, then brakes hard — useful when something needs to hit a stop with drama.",
        },
        {
          name: "expo.inOut",
          description:
            "Starts slow, zooms mid-way, and ends slow — creates very high energy while staying smooth.",
        },
      ],
    },
    {
      type: "Circ",
      base: "circ",
      description:
        "Circular easing mimics circular motion — slow starts and ends, with a natural rolling feeling.",
      variants: [
        {
          name: "circ.in",
          description:
            "Starts very slowly, then picks up — feels like something rolling from a stop.",
        },
        {
          name: "circ.out",
          description:
            "Starts fast and eases softly — great for floating or gliding finishes.",
        },
        {
          name: "circ.inOut",
          description:
            "Balanced easing with both ends curved — smooth and organic transitions.",
        },
      ],
    },
    {
      type: "Back",
      base: "back",
      description:
        "Back easing adds a small overshoot — it pulls or pushes before settling into place, like a spring being let go.",
      variants: [
        {
          name: "back.in",
          description:
            "Pulls back slightly before launching forward — adds anticipation to entrances.",
        },
        {
          name: "back.out",
          description:
            "Goes slightly past the target, then settles — great for snappy exits.",
        },
        {
          name: "back.inOut",
          description:
            "Overshoots both at the start and end — very dynamic and playful motion.",
        },
      ],
    },
    {
      type: "Bounce",
      base: "bounce",
      description:
        "Bounce easing simulates real gravity and rebound — it adds a bouncy, playful energy.",
      variants: [
        {
          name: "bounce.in",
          description:
            "Bounce effect at the beginning — like a ball bouncing upward before taking off.",
        },
        {
          name: "bounce.out",
          description:
            "Bounces at the end — like dropping a ball and watching it settle.",
        },
        {
          name: "bounce.inOut",
          description:
            "Bounces both at the beginning and end — great for cartoonish or fun elements.",
        },
      ],
    },
    {
      type: "Elastic",
      base: "elastic",
      description:
        "Elastic easing mimics springy motion — overshoots and wobbles before settling, very high-energy.",
      variants: [
        {
          name: "elastic.in",
          description:
            "Starts with heavy resistance, then launches — good for dramatic entrances.",
        },
        {
          name: "elastic.out",
          description:
            "Overshoots then snaps into place — like letting go of a stretched rubber band.",
        },
        {
          name: "elastic.inOut",
          description:
            "Combines springiness at the start and end — excellent for exaggerated, bouncy elements.",
        },
      ],
    },
    {
      type: "Rough",
      base: "rough",
      description:
        "Rough easing creates jittery, randomized movement — chaotic, edgy, or glitchy effects.",
      variants: [
        {
          name: "rough",
          description:
            "Motion jumps unpredictably, like a camera shake or a rough sketch — customizable with config options like strength and taper.",
        },
      ],
    },
    {
      type: "SlowMo",
      base: "slow",
      description:
        "SlowMo isn't physically slow — it slows the middle part of the animation for dramatic effect. Great for showcasing key moments.",
      variants: [
        {
          name: "slow",
          description:
            "Speeds up at the beginning, slows down in the middle, then speeds up again — adds dramatic pacing in the middle.",
        },
      ],
    },
    {
      type: "Steps",
      base: "steps",
      description:
        "Steps easing breaks animation into fixed jumps instead of smooth motion — like ticking through frames or progress bars.",
      variants: [
        {
          name: "steps",
          description:
            "Creates fixed jumps based on a step count, like `steps(5)` — great for sprite sheets or pixel-art-style movement.",
        },
      ],
    },
    {
      type: "None",
      base: "none",
      description:
        "No easing at all — just a constant, linear transition from start to end. Useful when you want robotic or direct motion.",
      variants: [
        {
          name: "none",
          description:
            "No acceleration or deceleration — moves at a flat, even speed the entire time.",
        },
      ],
    },
  ],
};
export const gsapConcepts = [
  {
    title: "gsap.to()",
    description:
      "Animates elements from their current state to a new one. You define only the end state.",
    explanation: `
     <p><code>gsap.to()</code> transitions elements from their current values to the values you specify. It's the most common method for creating animations in GSAP.</p>

<p>This method is powerful because it lets you focus only on the end state — GSAP will automatically detect where the element currently is (its position, opacity, scale, etc.) and animate it to your desired values. It handles all the in-between calculations for you.</p>
      <p>Use it to animate properties like <code>x</code>, <code>opacity</code>, <code>scale</code>, etc. It calculates the current state and animates toward the defined end values over time, using options like <code>duration</code>, <code>ease</code>, and <code>delay</code>.</p>
    `,
  },
  {
    title: "gsap.from()",
    description:
      "Animates elements from a defined start state to their current one. Great for entrance effects.",
    explanation: `
      <p><code>gsap.from()</code> starts the animation from the values you provide, animating back to the target's current or natural values.</p>
      <p>Perfect for making elements appear from offscreen or fade in from zero opacity without needing to manually reset styles.</p>
    `,
  },
  {
    title: "gsap.fromTo()",
    description:
      "Gives full control by specifying both start and end states of the animation.",
    explanation: `
      <p><code>gsap.fromTo()</code> gives explicit control over both the starting and ending values of the animation.</p>
      <p>This is useful when you don’t want GSAP to auto-calculate the start values, or if the elements have unpredictable current states.</p>
    `,
  },
  {
    title: "gsap.timeline()",
    description:
      "Creates a sequence of animations that can run in order or together. Helps manage complexity.",
    explanation: `
      <p><code>gsap.timeline()</code> is used to chain multiple animations into a single timeline with relative or absolute control over their timings.</p>
      <p>Supports adding labels, defaults, and precise sequencing to orchestrate complex motion effects.</p>
    `,
  },
  {
    title: "draw()",
    description:
      "Animates SVG strokes to make them appear like they’re being drawn in real time.",
    explanation: `
    <p>The <code>draw</code> effect in GSAP usually refers to animating the stroke of an SVG path using the <code>DrawSVGPlugin</code>.</p>
    <p>It gives the illusion of a path being drawn on screen by animating the <code>stroke-dasharray</code> and <code>stroke-dashoffset</code> properties.</p>
    <p>Common use: <code>gsap.fromTo("path", { drawSVG: "0%" }, { drawSVG: "100%", duration: 2 })</code></p>
    <p>This is especially powerful for line art, illustrations, signatures, or any SVG-based storytelling visuals.</p>
  `,
  },
  {
    title: "add()",
    description:
      "Adds a tween, label, or callback into a timeline at a specific time or label.",
    explanation: `
    <p><code>add()</code> inserts animations, callbacks, or labels into a GSAP timeline at a specific point.</p>
    <p>This is super useful when orchestrating multiple animations with exact control over their sequence. You can even nest timelines!</p>
    <p>Use <code>tl.add(gsap.to(...), "label")</code> or <code>tl.addLabel("myLabel")</code> to control the flow of your animation script.</p>
  `,
  },
  {
    title: "context()",
    description:
      "Scopes animations to a specific DOM subtree and auto-cleans them on unmount.",
    explanation: `
    <p><code>gsap.context()</code> is designed for React and similar frameworks to safely scope animations and clean them up when components unmount.</p>
    <p>Wrap your animations inside <code>context(() => { ... })</code> and target elements with selector logic relative to a container. This avoids memory leaks and stale references.</p>
    <p>Use it like <code>gsap.context(ctx => { ctx.add(...) }, containerRef)</code> in a <code>useEffect</code>.</p>
  `,
  },
  {
    title: "ScrollTrigger",
    description:
      "Connects animations to scroll position. Triggers or syncs animations based on scroll progress.",
    explanation: `
      <p><code>ScrollTrigger</code> is a GSAP plugin that binds animations to the scroll position of the page or container.</p>
      <p>It can trigger animations when elements enter the viewport, scrub animations based on scroll progress, or pin elements during scroll.</p>
    `,
  },
  {
    title: "pin",
    description:
      "Keeps an element fixed in place during scrolling. Part of ScrollTrigger.",
    explanation: `
      <p><code>pin</code> is a ScrollTrigger option that locks an element in place while scrolling continues around it.</p>
      <p>This is useful for effects like sticky headers, scroll-driven storytelling, or parallax-style layouts.</p>
    `,
  },
  {
    title: "repeat & yoyo",
    description:
      "`repeat` loops the animation; `yoyo` makes it play backward and forward alternately.",
    explanation: `
      <p><code>repeat</code> defines how many times an animation should loop. Use <code>-1</code> for infinite looping.</p>
      <p><code>yoyo</code> makes the animation reverse direction after each cycle, creating a ping-pong effect.</p>
    `,
  },
  {
    title: "defaults (in timeline)",
    description:
      "Sets common values (like duration/ease) for all animations in a timeline.",
    explanation: `
      <p><code>defaults</code> is a property of timelines that lets you apply shared settings like <code>duration</code> and <code>ease</code> to all animations added to that timeline.</p>
      <p>This keeps code cleaner and ensures consistent animation styles.</p>
    `,
  },

  {
    title: "ease",
    moreInfo: GSAP_EASE,
    description:
      "Controls the animation’s speed curve. Can accelerate, decelerate, bounce, etc.",
    explanation: `
      <p><code>ease</code> defines the pacing of the animation. It determines how the speed changes over time — like easing in, out, or bouncing.</p>
      <p>GSAP supports many easing types such as <code>power1</code>, <code>bounce</code>, <code>elastic</code>, and even custom ease curves.</p>
    `,
  },

  {
    title: "onComplete & onStart",
    description: "Callbacks that trigger at the start or end of animations.",
    explanation: `
      <p><code>onStart</code> runs a function when the animation begins, and <code>onComplete</code> runs one after it finishes.</p>
      <p>They’re used to trigger actions like starting another animation, updating UI, or firing side effects.</p>
    `,
  },

  {
    title: "matchMedia",
    description: "Creates responsive animations for different screen sizes.",
    explanation: `
      <p><code>matchMedia</code> in GSAP allows you to conditionally run animations based on media queries like screen width.</p>
      <p>This makes it easy to build responsive animation logic without duplicating code for different breakpoints.</p>
    `,
  },

  {
    title: "modifiers",
    description:
      "Dynamically adjusts values mid-animation for more control or effects.",
    explanation: `
      <p><code>modifiers</code> let you intercept and modify property values while they animate, using custom functions.</p>
      <p>This enables effects like snapping to a grid, looping positions, or clamping numbers on the fly.</p>
    `,
  },
  {
    title: "kill()",
    description: "Stops or cancels an animation in progress.",
    explanation: `
      <p><code>kill()</code> is used to stop, remove, or clear running animations on elements or timelines.</p>
      <p>It helps free up resources, prevent animation conflicts, or respond to UI changes like navigation.</p>
    `,
  },
  {
    title: "addLabel & seek",
    description:
      "Marks timeline moments with labels and lets you jump to them programmatically.",
    explanation: `
      <p><code>addLabel()</code> creates named markers in a timeline, allowing you to reference points with human-readable strings.</p>
      <p><code>seek()</code> lets you jump directly to a label or time, instantly updating the timeline's progress — useful for scrubbing, previews, or controls.</p>
    `,
  },
];
