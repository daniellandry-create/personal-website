---
title: "Dice Mural Machine"
description: "A machine that takes an image as input and renders it as a large mural made entirely of dice, sorted and placed by pip count and orientation."
role: "Team Member"
dateRange: "Mar. 2026 - Present"
tags: ["SolidWorks", "3D Printing", "Arduino", "Motor Control", "OLED Displays", "Embedded Systems"]
featured: true
order: 1
image: "../../assets/projects/dice-mural-machine-card.png"
imageAlt: "A single white six-sided die with black pips"
gallery:
  - src: "/projects/dice-mural-machine/breadboard-control-electronics.png"
    alt: "Breadboard prototype of the motor driver and control electronics for the Dice Mural Machine"
  - src: "/projects/dice-mural-machine/tower-assembly.png"
    alt: "Assembled multi-tier tower structure of the Dice Mural Machine with wiring running to the top control level"
  - src: "/projects/dice-mural-machine/dice-placement-mechanism.png"
    alt: "3D-printed dice hopper and placement arm mechanism holding a die in its gripper"
# No footage yet -- hides the "Video walkthrough" placeholder on the
# project page until there's a real video to link. Remove this line
# (or set true) once a video is ready.
showVideoPlaceholder: false
---

## Overview

The Dice Mural Machine takes a source image, converts it to a grid of
grayscale values, and maps each cell to a die face -- the way a
halftone print uses dot size, this uses dice pip count and orientation
to reproduce brightness and contrast. The end result is a wall-sized
mural built from hundreds of physical dice.

## What I built

- **Mechanical design.** 3D modeled and printed 20+ custom parts in
  SolidWorks -- hoppers, sorting channels, and the placement head --
  animating full assemblies before committing print time so fit issues
  showed up on screen instead of on the printer.
- **Electronics.** Built out the control stack: microcontrollers, motor
  drivers, motors, and OLED displays for status/feedback, integrated
  into one coordinated system that drives placement and reports state
  as the mural is built.
- **Systems integration.** Working with the rest of the team to close
  the loop between the image-processing side (turning pixels into a
  dice layout) and the physical placement hardware.

## Status

Actively in development as of March 2026. More detail and a full
build log go here as the machine comes together -- see the photos
below for a look at progress so far.
