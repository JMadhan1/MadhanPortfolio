# Quick Animation Reference Guide

## 🎯 Interactive Elements

### Custom Cursor
- **Location**: Entire page
- **Effect**: Smooth animated cursor with trailing follower
- **Hover**: Expands on interactive elements
- **Color**: Primary brand color with glow

### Particle System
- **Location**: Background (fixed canvas)
- **Count**: 100 particles
- **Behavior**: Floating with connections when nearby
- **Color**: Primary blue with varying opacity

## 🎴 Card Effects

### Project Cards
```css
- 3D tilt on hover (follows mouse)
- Spotlight effect (radial gradient)
- Scale up animation
- Smooth transitions
- Reveal animation on scroll (scale)
```

### Skill Cards
```css
- 3D tilt on hover
- Spotlight effect
- Enhanced shadow on hover
- Reveal animation on scroll (fade up)
```

### Process Cards
```css
- 3D tilt on hover
- Icon rotation and scale
- Rainbow gradient on hover
- Reveal animation on scroll
```

## 📜 Scroll Animations

### Reveal Types
1. **reveal** - Fade up from bottom
2. **reveal-left** - Slide in from left
3. **reveal-right** - Slide in from right
4. **reveal-scale** - Scale up from center

### Auto-Applied
- Project cards: `reveal-scale` with stagger
- Skill cards: `reveal` with stagger
- Section content: Alternating left/right

## 🎮 Button Effects

### CTA Buttons
- **Magnetic effect**: Follows cursor slightly
- **Shimmer effect**: Light sweep on hover
- **Scale animation**: Grows on hover
- **Glow effect**: Enhanced shadow

### Navigation Links
- **Underline animation**: Expands from left
- **Color transition**: Smooth fade
- **Active state**: Gradient underline

## 📊 Number Counters

### Stats Section
- **Trigger**: When scrolled into view
- **Duration**: 2 seconds
- **Easing**: Linear increment
- **Target**: data-target attribute

## ⌨️ Typing Effect

### Hero Subtitle
- **Delay**: 500ms after page load
- **Speed**: 100ms per character
- **Effect**: Typewriter style

## 🌊 Parallax Effects

### Hero Section
- **Hero content**: Moves slower than scroll
- **Gradient orbs**: Different speeds per orb
- **Effect**: Depth and dimension

## 🎨 Glassmorphism

### Applied To
- Project cards
- Skill cards
- Header
- Modals
- Buttons

### Properties
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
```

## 🎯 Performance Tips

### Optimized
✅ RequestAnimationFrame for animations
✅ Intersection Observer for scroll
✅ CSS transforms (GPU accelerated)
✅ Will-change properties
✅ Passive event listeners

### Avoid
❌ Animating width/height
❌ Excessive particle count
❌ Scroll event listeners
❌ Layout thrashing

## 🔧 Customization

### Particle Count
```javascript
// Line ~9195 in index.html
for (let i = 0; i < 100; i++) {  // Change 100 to desired count
  particles.push(new Particle());
}
```

### Animation Speed
```javascript
// Cursor smoothness (line ~9129)
cursorX += (mouseX - cursorX) * 0.2;  // 0.2 = speed (0-1)

// Particle speed (line ~9164)
this.speedX = Math.random() * 0.5 - 0.25;  // Adjust 0.5
```

### Reveal Delay
```javascript
// Line ~9362
card.style.transitionDelay = `${index * 0.1}s`;  // 0.1s per card
```

### 3D Tilt Intensity
```javascript
// Line ~9238
const rotateX = (y - centerY) / 10;  // Divide by larger = less tilt
const rotateY = (centerX - x) / 10;
```

## 🎨 Color Customization

### CSS Variables (Root)
```css
--primary: #6366f1;        /* Main brand color */
--glow-primary: 0 0 20px rgba(99, 102, 241, 0.5);
--glow-accent: 0 0 20px rgba(16, 185, 129, 0.5);
```

### Particle Color
```javascript
// Line ~9183
ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
// Change RGB values: rgba(R, G, B, opacity)
```

## 📱 Mobile Considerations

### Disabled on Mobile
- Custom cursor (touch devices)
- Some 3D effects (performance)
- Parallax (can cause issues)

### Optimized for Mobile
- Touch-friendly hover states
- Simplified animations
- Reduced particle count
- Faster transitions

## 🚀 Loading Sequence

1. **Page load** (0ms)
2. **Cursor init** (immediate)
3. **Particles start** (immediate)
4. **Typing effect** (500ms delay)
5. **Scroll reveals** (on scroll)
6. **Counter animations** (when visible)

## 🎯 Best Practices

### DO
✅ Test on different devices
✅ Monitor performance
✅ Keep particle count reasonable
✅ Use appropriate delays
✅ Respect user preferences

### DON'T
❌ Overuse animations
❌ Ignore mobile users
❌ Animate everything
❌ Use too many particles
❌ Forget accessibility

## 🔍 Debugging

### Check Console
```javascript
// Add to see animation triggers
console.log('Animation initialized');
```

### Performance Monitor
- Open DevTools > Performance
- Record while scrolling
- Check for 60fps
- Look for layout shifts

## 📚 Resources

- [MDN: Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [CSS Tricks: Transforms](https://css-tricks.com/almanac/properties/t/transform/)
- [Web.dev: Animations](https://web.dev/animations/)

---

*Quick reference for all portfolio animations and effects*
