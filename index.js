/* global bootstrap: false */

(() => {
  'use strict'

  // Tooltip and popover demos
  document.querySelectorAll('.tooltip-demo')
    .forEach(tooltip => {
      new bootstrap.Tooltip(tooltip, {
        selector: '[data-bs-toggle="tooltip"]'
      })
    })

  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new bootstrap.Popover(popover)
    })

  document.querySelectorAll('.toast')
    .forEach(toastNode => {
      const toast = new bootstrap.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Disable empty links and submit buttons
  document.querySelectorAll('[href="#"]')
    .forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
      })
    })

  function setActiveItem() {
    const { hash } = window.location

    if (hash === '') {
      return
    }

    const link = document.querySelector(`.bd-aside a[href="${hash}"]`)

    if (!link) {
      return
    }

    const active = document.querySelector('.bd-aside .active')
    const parent = link.parentNode.parentNode.previousElementSibling

    link.classList.add('active')

    if (parent.classList.contains('collapsed')) {
      parent.click()
    }

    if (!active) {
      return
    }

    const expanded = active.parentNode.parentNode.previousElementSibling

    active.classList.remove('active')

    if (expanded && parent !== expanded) {
      expanded.click()
    }
  }

  setActiveItem()
  window.addEventListener('hashchange', setActiveItem)
})()



//hover button section 6
        document.querySelectorAll(".toggle-btn").forEach(btn => {
            btn.addEventListener("click", function() {
                let parentBox = this.parentElement;
                
                // Remove "active" class from all boxes
                document.querySelectorAll(".work-box").forEach(box => box.classList.remove("active"));

                // Toggle active state for the clicked box
                if (!parentBox.classList.contains("active")) {
                    parentBox.classList.add("active");
                }
            });
        });


//header
document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".custom-toggler");
  const dropdown = document.querySelector(".custom-dropdown");

  toggler.addEventListener("click", function () {
    dropdown.classList.toggle("active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!toggler.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
    }
  });
});

//section1




//section 4
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.service-btn');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const popup = this.querySelector('.popup-text');
          const currentBox = this.closest('.service-box');
          
          // Find the row containing this button
          const currentRow = findButtonRow(currentBox);
          
          // Toggle the popup visibility
          popup.classList.toggle('show');

          // Get all service boxes in the current row
          const serviceBoxesInRow = getServiceBoxesInRow(currentRow);

          // Check if the popup is currently shown
          if (popup.classList.contains('show')) {
              // Add spacing to all service boxes in the same row
              serviceBoxesInRow.forEach(box => {
                  box.classList.add('adjust-spacing');
              });
          } else {
              // Remove spacing from all service boxes in the same row
              serviceBoxesInRow.forEach(box => {
                  box.classList.remove('adjust-spacing');
              });
          }

          // Close other popups
          buttons.forEach(otherButton => {
              if (otherButton !== button) {
                  const otherPopup = otherButton.querySelector('.popup-text');
                  const otherBox = otherButton.closest('.service-box');
                  const otherRow = findButtonRow(otherBox);
                  
                  if (otherRow !== currentRow) {
                      const otherServiceBoxes = getServiceBoxesInRow(otherRow);
                      otherServiceBoxes.forEach(box => {
                          box.classList.remove('adjust-spacing');
                      });
                  }
                  otherPopup.classList.remove('show');
              }
          });
      });
  });

  // Helper function to find which row a button belongs to
  function findButtonRow(serviceBox) {
      const allBoxes = Array.from(document.querySelectorAll('.service-box'));
      const boxIndex = allBoxes.indexOf(serviceBox);
      return Math.floor(boxIndex / 3); // Since we have 3 boxes per row
  }

  // Helper function to get all service boxes in the same row
  function getServiceBoxesInRow(rowIndex) {
      const allBoxes = Array.from(document.querySelectorAll('.service-box'));
      return allBoxes.slice(rowIndex * 3, (rowIndex + 1) * 3);
  }

  // Close popups when clicking outside
  document.addEventListener('click', function(event) {
      if (!event.target.closest('.service-btn')) {
          const allServiceBoxes = document.querySelectorAll('.service-box');
          const allPopups = document.querySelectorAll('.popup-text');
          
          allServiceBoxes.forEach(box => box.classList.remove('adjust-spacing'));
          allPopups.forEach(popup => popup.classList.remove('show'));
      }
  });
});

//section 8
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Form submitted successfully!');
  });
});