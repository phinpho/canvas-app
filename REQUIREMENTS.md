# Frontend Engineer - Take-Home Assignment

**Expected time commitment:** 3-4 hours
**Deadline:** 5 days from receipt

## Overview

At Encube, we're building a visual collaboration platform centered
around an infinite canvas with advanced 3D capabilities. This
assignment is designed to evaluate your product thinking, technical
execution, and ability to work with modern 3D web technologies.

You'll build a **simplified interactive 3D canvas feature** that
demonstrates your approach to building intuitive, performant
interfaces for complex technical products.

## The Challenge

Build a **collaborative canvas commenting tool** - think of it as a
lightweight version of what you might find in Figma, Miro, or design
review tools.

### Core Requirements

1. **Infinite Canvas Foundation**
   - Implement a pan-able and zoomable canvas
   - Add 3-5 placeholder items on the canvas, including 3D models
     (could be simple colored rectangles, simple 3D shapes, images,
     or mock components)
   - Canvas should feel smooth and responsive
   - Show zoom level indicator
2. **Commenting System**
   - Users can click anywhere on the canvas to add a comment thread
   - Each comment should have:
     - Position anchored to canvas coordinates (not viewport)
     - Author name and timestamp
     - Comment text (editable)
     - Visual indicator (pin/dot/bubble)
   - Clicking a comment opens a side panel or popup with the thread
   - Users can reply to comments (nested threads)
   - Show a list view of all comments that can filter by "resolved"
     vs "open"

### Technical Constraints

- Use **React** and **TypeScript**
- Style with **Tailwind CSS** (or similar)
- The interface should be clean, intuitive, and responsive
- No backend required - simulate everything client-side

> [!NOTE]
> You are allowed to use any technical tool of your choosing to complete
> the task with the exception that it should be you as an individual that
> contribute the code (no other physical person can do the work for you).
> Large Language Models or similar tools are fine to use.

## Deliverables

1. **GitHub repository** with:
   - Complete source code
   - `README.md` with setup instructions
   - `DECISIONS.md` documenting your key product and technical decisions
2. **Live demo** (optional but recommended):
   - Deploy to Vercel, Netlify, or similar
   - Include the link in your README
3. **Brief video walkthrough** (2-3 minutes):
   - Screen recording showing the functionality
   - Quick explanation of one interesting technical or product decision
     you made
   - Talk through key parts of the code, how they work and the tradeoffs
     involved with those engineering choices

## Evaluation Criteria

We'll be looking at:

- ✅ Does it work smoothly and feel polished?
  - ✅ Is the code clean, typed, and maintainable?
- ✅ Did you make smart trade-offs given the time constraint?
- ✅ Does it show understanding of canvas coordinate systems and product design?
- ✅ Can you communicate your thinking clearly?

**We're NOT looking for:**

- ❌ Over-engineering or premature optimization
- ❌ Pixel-perfect design (good taste > design skills)
- ❌ 100% feature completeness

## Bonus Points (Optional)

If you have extra time and want to showcase specific skills:

- Smooth animations when navigating to comments
- Keyboard shortcuts for power users (e.g., `C` to add comment, `Esc` to close)
- Comment resolution workflow with visual state changes
- Undo/redo functionality
- Persistence (localStorage is fine)
- Mini-map showing comment locations
- Bulk actions (select multiple comments, resolve all, etc.)
- Accessibility considerations (keyboard navigation, screen readers)
- Unit or integration tests for critical paths

> [!NOTE]
> These are truly optional. A well-executed core assignment is better than a
> feature-bloated one.

## Submission

Send your submission by replying to the person that send the assignment to
you. Please provide:

- Link to GitHub repository
- Link to live demo (if applicable)
- Link to video walkthrough
- Any questions or context you'd like to share

## Questions?

If anything is unclear or you need clarification, please reach out. We want
you to do your best work, and we're happy to help remove any blockers or
ambiguity.

Good luck! We're excited to see what you build. 🚀

> [!IMPORTANT]
> **A note on time:**
> We know you're likely interviewing elsewhere and have other commitments.
> If the 5-day timeline doesn't work for you, just let us know. We're
> flexible and want to see your best work, not rushed work.
