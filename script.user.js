// ==UserScript==
// @name         Universal Dark Mode - ClassPlus & Testbook
// @namespace    https://github.com/Killersparrow1/classplus-dark-mode
// @version      1.4.1
// @description  Professional dark mode for ClassPlus Store and Testbook - No white boxes, perfect readability
// @author       Killersparrow1
// @homepage     https://github.com/Killersparrow1/classplus-dark-mode
// @homepageURL  https://github.com/Killersparrow1/classplus-dark-mode
// @supportURL   https://github.com/Killersparrow1/classplus-dark-mode/issues
// @updateURL    https://github.com/Killersparrow1/classplus-dark-mode/raw/main/script.user.js
// @downloadURL  https://github.com/Killersparrow1/classplus-dark-mode/raw/main/script.user.js
// @match        https://web.classplusapp.com/store/course/*
// @match        https://testbook.com/*
// @match        https://www.testbook.com/*
// @grant        none
// @license      MIT
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Your existing script code remains exactly the same...
    const darkModeStyles = `
        /* Reset backgrounds and text colors */
        * {
            background-color: transparent !important;
            color: #e8eaed !important;
        }

        /* Main backgrounds */
        body, html, #root, .app, [data-reactroot] {
            background-color: #0f1116 !important;
        }

        /* All containers and sections */
        div, section, article, main, aside, header, footer,
        nav, form, li, ul, ol, td, th, tr, tbody, thead,
        .container, .wrapper, .content, .card, .box, .panel,
        [class*="card"], [class*="container"], [class*="wrapper"],
        [class*="content"], [class*="box"], [class*="panel"] {
            background-color: #1a1d23 !important;
        }

        /* Specific white background fixes */
        .bg-white, .white-bg, .light-bg,
        [style*="background: white"],
        [style*="background: #fff"],
        [style*="background: #ffffff"],
        [style*="background-color: white"],
        [style*="background-color: #fff"],
        [style*="background-color: #ffffff"],
        [style*="background-color: rgb(255,255,255)"],
        [style*="background-color: rgba(255,255,255"],
        [class*="bg-white"],
        [class*="white"] {
            background-color: #1a1d23 !important;
        }

        /* Links and interactive elements */
        a, [class*="link"] {
            color: #3b82f6 !important;
        }

        a:hover {
            color: #60a5fa !important;
        }

        /* Buttons */
        button, .btn {
            background-color: #2a2f3a !important;
            border: 1px solid #3f4552 !important;
            color: #e8eaed !important;
        }

        .btn-primary, [class*="btn-primary"] {
            background-color: #3b82f6 !important;
            border-color: #3b82f6 !important;
            color: white !important;
        }

        /* Special text colors */
        .price, [class*="price"], [class*="cost"] {
            color: #10b981 !important;
        }

        .text-primary, [class*="primary"] {
            color: #3b82f6 !important;
        }

        .text-success, [class*="success"] {
            color: #10b981 !important;
        }

        .text-danger, [class*="danger"] {
            color: #ef4444 !important;
        }

        .text-warning, [class*="warning"] {
            color: #f59e0b !important;
        }

        /* Header */
        header, .header, nav, .navbar {
            background-color: #15181e !important;
            border-bottom: 1px solid #2a2f3a !important;
        }

        /* Cards */
        .course-card, .card, [class*="card"] {
            border: 1px solid #2a2f3a !important;
            border-radius: 8px !important;
        }

        /* Inputs */
        input, textarea, select, .form-control {
            background-color: #0f1116 !important;
            border: 1px solid #2a2f3a !important;
            color: #e8eaed !important;
        }

        input::placeholder {
            color: #6b7280 !important;
        }

        /* Images */
        img {
            filter: brightness(0.9) !important;
        }

        /* Testbook specific elements */
        .test-series, .exam-card, .practice-set,
        .quiz-container, .question, .answer,
        .explanation, .progress, .progress-bar,
        .stat, .testbook-card {
            background-color: #1a1d23 !important;
            border: 1px solid #2a2f3a !important;
        }

        /* Testbook progress elements */
        .progress-fill, [class*="progress"]:not(.progress-bar) {
            background-color: #3b82f6 !important;
        }

        /* Testbook tables */
        table, th, td {
            background-color: #1a1d23 !important;
            border-color: #2a2f3a !important;
        }

        th {
            background-color: #15181e !important;
        }

        /* Testbook code blocks */
        pre, code {
            background-color: #15181e !important;
            border: 1px solid #2a2f3a !important;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #1a1d23;
        }
        ::-webkit-scrollbar-thumb {
            background: #3f4552;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #4b5260;
        }

        /* Selection */
        ::selection {
            background-color: #3b82f6 !important;
            color: white !important;
        }
    `;

    function applyDarkMode() {
        // Remove existing style
        const existing = document.getElementById('universal-dark-mode');
        if (existing) existing.remove();

        // Add new style
        const style = document.createElement('style');
        style.id = 'universal-dark-mode';
        style.textContent = darkModeStyles;
        document.head.appendChild(style);

        // Force fix any remaining issues
        forceFixElements();
    }

    function forceFixElements() {
        // Fix computed styles that might override our CSS
        document.querySelectorAll('*').forEach(el => {
            const bg = window.getComputedStyle(el).backgroundColor;
            const color = window.getComputedStyle(el).color;

            if (bg.includes('255, 255, 255') || bg === 'rgb(255, 255, 255)' || bg === '#ffffff') {
                el.style.setProperty('background-color', '#1a1d23', 'important');
            }

            if (color.includes('0, 0, 0') || color === 'rgb(0, 0, 0)' || color === '#000000') {
                el.style.setProperty('color', '#e8eaed', 'important');
            }
        });

        // Additional fixes for Testbook specific elements
        if (window.location.hostname.includes('testbook.com')) {
            fixTestbookSpecific();
        }
    }

    function fixTestbookSpecific() {
        // Testbook specific fixes
        const testbookSelectors = [
            '.test-series-card', '.exam-card', '.practice-card',
            '.question-paper', '.mock-test', '.live-class',
            '.video-card', '.study-material', '.performance-card'
        ];

        testbookSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.style.backgroundColor = '#1a1d23';
                el.style.borderColor = '#2a2f3a';
                el.style.color = '#e8eaed';
            });
        });
    }

    // Initial application
    applyDarkMode();

    // Observe for dynamic content
    const observer = new MutationObserver(() => {
        applyDarkMode();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
    });

    // Handle route changes
    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            setTimeout(applyDarkMode, 100);
        }
    }).observe(document, { subtree: true, childList: true });

    // Reapply on load
    window.addEventListener('load', applyDarkMode);

    // Additional application for lazy content
    setTimeout(applyDarkMode, 1000);
    setTimeout(applyDarkMode, 3000);

    console.log('🎨 Universal Dark Mode activated for ClassPlus & Testbook!');
})();
