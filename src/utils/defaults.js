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
    title: "stagger",
    description:
      "Applies an animation to a group of elements with time gaps between each.",
    explanation: `
      <p><code>stagger</code> is used to apply animations to multiple elements with delays between them.</p>
      <p>It creates wave-like, cascading effects for list items, grid elements, or repeated shapes.</p>
    `,
  },
  {
    title: "delay",
    description: "Adds a pause before the animation starts.",
    explanation: `
      <p><code>delay</code> specifies a wait time before an animation begins, measured in seconds.</p>
      <p>Helpful for timing control, sequencing, or syncing effects with other events.</p>
    `,
  },
  {
    title: "ease",
    description:
      "Controls the animation’s speed curve. Can accelerate, decelerate, bounce, etc.",
    explanation: `
      <p><code>ease</code> defines the pacing of the animation. It determines how the speed changes over time — like easing in, out, or bouncing.</p>
      <p>GSAP supports many easing types such as <code>power1</code>, <code>bounce</code>, <code>elastic</code>, and even custom ease curves.</p>
    `,
  },
  {
    title: "scrub",
    description:
      "Binds an animation directly to scroll progress, making it scroll-driven.",
    explanation: `
      <p><code>scrub</code> links the animation’s progress directly to the scroll bar, so the animation plays as you scroll and reverses when you scroll back.</p>
      <p>Great for fluid storytelling, parallax sections, and scroll-synced timelines.</p>
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
    title: "toggleActions",
    description: "Defines how animations behave when scrolling in/out of view.",
    explanation: `
      <p><code>toggleActions</code> is a ScrollTrigger setting that controls what happens when elements enter and leave the viewport.</p>
      <p>The value is a string with four actions: <code>onEnter</code>, <code>onLeave</code>, <code>onEnterBack</code>, and <code>onLeaveBack</code>.</p>
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
    title: "motionPath",
    description: "Animates elements along custom SVG-like paths.",
    explanation: `
      <p><code>motionPath</code> is a plugin that animates elements along a defined path or curve.</p>
      <p>It supports automatic rotation, alignment, and easing to create smooth, visually rich motion paths.</p>
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
    title: "set()",
    description: "Instantly sets properties on an element without animating.",
    explanation: `
      <p><code>gsap.set()</code> applies values immediately without any animation or tweening.</p>
      <p>Useful for initialization, resetting styles, or toggling element states instantly.</p>
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

export const gsapStyleProps = [
  {
    title: "x",
    description:
      "Moves an element horizontally. Uses hardware acceleration for better performance.",
  },
  {
    title: "y",
    description:
      "Moves an element vertically. Like `x`, it’s optimized for performance.",
  },
  {
    title: "opacity",
    description:
      "Controls transparency. `0` is invisible, `1` is fully visible.",
  },

  {
    title: "scale",
    description:
      "Changes element size. `1` is normal, `0.5` is half-size, `2` is double.",
  },
  {
    title: "rotation",
    description:
      "Rotates an element in degrees. Can spin multiple times using values over 360.",
  },
  {
    title: "skewX and skewY",
    description:
      "Tilts elements on the X or Y axis, creating a slanted effect.",
  },
  {
    title: "transformOrigin",
    description: "Sets the anchor point for transforms like scale or rotate.",
  },
  {
    title: "backgroundColor / color",
    description: "Animates background or text color transitions smoothly.",
  },
  {
    title: "width / height",
    description: "Animates changes in size, useful for dynamic layout changes.",
  },
];
