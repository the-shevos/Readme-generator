const form = document.getElementById('readmeForm');
const output = document.getElementById('output');
const copyBtn = document.getElementById('copyBtn');
const themeToggle = document.getElementById('themeToggle');
const askAI = document.getElementById('askAI');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const tech = document.getElementById('tech').value.split(',').map(t => t.trim());
    const features = document.getElementById('features').value.split(',').map(f => f.trim());
    const installation = document.getElementById('installation').value;
    const usage = document.getElementById('usage').value;

    let readme = `# ${title}

## Description
${description}

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
${installation ? '- [Installation](#installation)' : ''}
${usage ? '- [Usage](#usage)' : ''}

## Features
${features.map(f => `- ${f}`).join('\n')}

## Technologies Used
${tech.map(t => `- ${t}`).join('\n')}

${installation ? `## Installation\n${installation}\n` : ''}
${usage ? `## Usage\n${usage}\n` : ''}`;

    output.value = readme;
    output.style.height = 'auto';
    output.style.height = output.scrollHeight + 'px';
});

copyBtn.addEventListener('click', function() {
    output.select();
    document.execCommand('copy');

    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'README copied to clipboard!',
        showConfirmButton: false,
        timer: 2000,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        background: document.body.classList.contains('dark') ? '#fff' : '#000',
        color: document.body.classList.contains('dark') ? '#222' : '#fff'
    });
});

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
});

askAI.addEventListener('click', function() {
    window.location.href = 'ai.html';
});
