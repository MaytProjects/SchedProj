document.addEventListener('DOMContentLoaded', function() {
    // Define tasks with time slots
    const tasks = [
        { name: "Morning Workout", duration: 30, startHour: 7, endHour: 8 },
        { name: "Work", duration: 120, startHour: 9, endHour: 11 },
        { name: "Lunch Break", duration: 60, startHour: 12, endHour: 13 },
        { name: "Evening Walk", duration: 30, startHour: 17, endHour: 18 },
    ];

    let completedTasks = 0;
    const totalTasks = tasks.length;

    // Grab the container to display tasks
    const tasksContainer = document.getElementById('tasks');

    // Loop through each task and create task elements
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <p>${task.name}</p>
            <button id="task${index}" style="display: none;">Mark as Completed</button>
        `;
        tasksContainer.appendChild(taskElement);

        // Get current time (in hours)
        const currentTime = new Date().getHours();

        // Show button if the task's time range includes the current time
        if (currentTime >= task.startHour && currentTime < task.endHour) {
            document.getElementById(`task${index}`).style.display = 'block'; // Show the button
        }

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

