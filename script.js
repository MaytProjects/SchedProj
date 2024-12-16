// script.js
document.addEventListener('DOMContentLoaded', function() {
    const tasks = [
        { name: "Morning Workout", duration: 30 }, // Task name and duration in minutes
        { name: "Work", duration: 120 },
        { name: "Lunch Break", duration: 60 },
        { name: "Evening Walk", duration: 30 },
    ];

    let completedTasks = 0;
    const totalTasks = tasks.length;

    // Dynamically create task elements
    const tasksContainer = document.getElementById('tasks');
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <p>${task.name}</p>
            <button id="task${index}">Mark as Completed</button>
        `;
        tasksContainer.appendChild(taskElement);

        // Add event listener to mark task as completed
        document.getElementById(`task${index}`).addEventListener('click', function() {
            completeTask(task, index);
        });
    });

    // Function to handle task completion
    function completeTask(task, index) {
        completedTasks++;
        document.getElementById(`task${index}`).classList.add('completed');
        updateTimeline();
    }

    // Function to update the progress bar
    function updateTimeline() {
        const progress = (completedTasks / totalTasks) * 100;
        document.getElementById('progress').style.width = progress + '%';
    }

    // Initial Timeline Setup
    const timeline = document.getElementById('timeline');
    const progressBar = document.createElement('div');
    progressBar.id = 'progress';
    timeline.appendChild(progressBar);
});
