// Initialized Value - variable declared and given a value
let initializedValue = "Hello World";
document.getElementById("initialized-value").textContent = initializedValue;

// Unassigned Value - variable declared but no value assigned yet
let unassignedValue;
document.getElementById("unassigned-value").textContent = unassignedValue;

// Assigned Value - variable declared and assigned
let assignedValue = 42;
document.getElementById("assigned-value").textContent = assignedValue;

// Reassigned Value - variable given a new value
let reassignedValue = "First";
reassignedValue = "Second";
document.getElementById("reassigned-value").textContent = reassignedValue;