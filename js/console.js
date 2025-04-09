document.addEventListener("DOMContentLoaded",function(){const inputField=document.getElementById("terminal-input");inputField.focus();inputField.addEventListener("keydown",function(event){if(event.key==="Enter"){const command=inputField.value.trim().toLowerCase();handleCommand(command);inputField.value=""}})});function handleCommand(command){const outputArea=document.querySelector(".terminal-output");const response=generateResponse(command);outputArea.innerHTML+=`<div><span>C:\\></span><span>${ command }</span></div><div>${ response }</div>`;outputArea.scrollTop=outputArea.scrollHeight;const commands=command.split(" ");const primaryCommand=commands[0];const argument=commands[1]}function generateResponse(command){switch(command){case "help":return "Available commands: neofetch";case "shayokh":return "soup";case "neofetch":return generateSystemInfo();default:return "Command not recognized. Type 'help' for available commands."}}function generateSystemInfo(){return `
        OS: Unidows 98<br>
        Kernel: Potato v2<br>
        CPU: DAM Ryan Stringripper 3990X<br>
        Memory: 48 TB<br>
        Graphics: NVODIO GayForce TTX 4090<br>
        Resolution: 1920x1080<br>
    `}
