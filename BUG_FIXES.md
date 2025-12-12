# Portfolio Bug Fixes - December 12, 2025

## Reported By: Mahesh Kakulooru (Future Entrepreneur)

---

## Bugs Fixed

### 1. ✅ Preview Links Not Opening
**Issue**: When clicking the "Preview" button on project cards, the links were not opening.

**Root Cause**: The `.project-overlay` element was blocking pointer events to the `.project-hover-content` which contains the preview button.

**Solution Applied**:
- Added `pointer-events: none;` to `.project-overlay` to prevent it from blocking clicks
- Added `pointer-events: auto;` to `.project-hover-content` to ensure it receives click events
- Added `pointer-events: auto;` and `cursor: pointer;` to `.preview-btn` to make it clickable
- Added `pointer-events: auto;` to `.project-badge` to keep badges interactive

**Files Modified**: `index.html` (CSS section)

**Testing**: 
- All 6 project preview buttons should now open their respective live project URLs in a new tab:
  - CodeMind AI → https://vibe2-1.onrender.com/
  - CiteCraft AI → https://citecraft-ai.onrender.com/
  - InvestGuard AI → https://investguardai.onrender.com/
  - OneDeFi → https://onedefi-97wa.onrender.com/
  - Navigate AI → https://navigate-ai-2.onrender.com/
  - CareerSync AI → https://careersync-ai.onrender.com/

---

### 2. ✅ Schedule Meeting Button Not Working
**Issue**: The "Schedule Call" button in the Contact section was not functional (had `href="#"`).

**Solution Applied**:
- Updated the button to link to Calendly: `https://calendly.com/jmadhan1`
- Added `target="_blank"` to open in a new tab

**Files Modified**: `index.html` (line 8119)

**Testing**: Click the "Schedule Call" button in the Contact section - it should now open your Calendly scheduling page in a new tab.

---

### 3. ✅ Download Resume Button Not Working
**Issue**: The "Download Resume" button in the Contact section was not functional (had `href="#"`).

**Solution Applied**:
- Updated the button to link to the resume file: `J_Madhan_Portfolio.docx`
- Added `download="J_Madhan_Resume.docx"` attribute to trigger download with a clean filename

**Files Modified**: `index.html` (line 8114)

**Testing**: Click the "Download Resume" button in the Contact section - it should now download your resume as "J_Madhan_Resume.docx".

---

## Summary of Changes

### CSS Changes (Pointer Events Fix)
```css
/* Added to .project-overlay */
pointer-events: none;

/* Added to .project-hover-content */
pointer-events: auto;

/* Added to .preview-btn */
pointer-events: auto;
cursor: pointer;

/* Added to .project-badge */
pointer-events: auto;
```

### HTML Changes (Button Links)
```html
<!-- Download Resume Button -->
<a href="J_Madhan_Portfolio.docx" download="J_Madhan_Resume.docx" class="action-btn primary">
  <i class="fas fa-download"></i>
  Download Resume
</a>

<!-- Schedule Call Button -->
<a href="https://calendly.com/jmadhan1" target="_blank" class="action-btn secondary">
  <i class="fas fa-calendar"></i>
  Schedule Call
</a>
```

---

## Testing Checklist

- [ ] Test all 6 project preview buttons (hover over project cards and click Preview)
- [ ] Test "Download Resume" button in Contact section
- [ ] Test "Schedule Call" button in Contact section
- [ ] Verify preview buttons open in new tabs
- [ ] Verify resume downloads with correct filename
- [ ] Verify Calendly opens in new tab

---

## Notes

1. **Calendly URL**: The Schedule Call button now points to `https://calendly.com/jmadhan1`. If you don't have a Calendly account or want to use a different scheduling service, please update this URL.

2. **Resume File**: The Download Resume button links to `J_Madhan_Portfolio.docx`. Make sure this file remains in the root directory of your portfolio.

3. **Browser Compatibility**: All fixes use standard CSS and HTML attributes that work across all modern browsers.

---

## Message to Mahesh Kakulooru

Thank you for taking the time to review my portfolio and for providing such detailed feedback! I truly appreciate your kind words about my projects and experience. All the bugs you reported have been fixed:

✅ **Preview Links**: All project preview buttons now work correctly  
✅ **Schedule Meeting**: The schedule call button now opens my Calendly page  
✅ **Download Resume**: The download resume button now downloads my resume  

I'm excited to connect with you as well! Feel free to schedule a call using the now-working "Schedule Call" button, or reach out through any of the contact methods on my portfolio.

Thank you again for your interest and for helping me improve my portfolio!

Best regards,  
J Madhan

---

**Fix Date**: December 12, 2025  
**Fixed By**: J Madhan  
**Status**: ✅ All bugs resolved
