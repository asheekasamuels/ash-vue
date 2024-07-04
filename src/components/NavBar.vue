<template>
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/"><img src="https://asheekasamuels.github.io/All-Images/images/Asheeka Barbie Logo.png" alt="logo"></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto me- mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link active" href="#landing">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#resume">Resume</a></li>
                    <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                    <li class="nav-item"><a class="nav-link" href="#testimonials">Testimonials</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact Me</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </template>
    
    <script>
        export default {
            name: "NavBarComp",
        }
    </script>
    
    <style scoped>
    
    
    img[alt="logo"] {
        width: 80px;
        height: 80px;
    }
    
    
    </style>