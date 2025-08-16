// Application section functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get references to elements
  const applicationButton = document.getElementById('applicationButton');
  const applicationSteps = document.querySelectorAll('.application-step');
  const featureContainer = document.getElementById('feature-cards');
  const countdownElement = document.getElementById('countdown');
  const documentsSection = document.getElementById('required-documents');
  const checklistToggle = document.getElementById('documents-checklist-toggle');
  const documentItems = document.querySelectorAll('.document-item');
  
  // Required Documents functionality
  if (checklistToggle && documentsSection) {
    // Set initial state - documents list is collapsed
    let isExpanded = false;
    
    // Progress bar elements
    const progressFill = document.getElementById('document-progress-fill');
    const documentsReady = document.getElementById('documents-ready');
    const documentsTotal = document.getElementById('documents-total');
    
    // Set total documents count (excluding automatic ones)
    const totalRequiredDocs = Array.from(documentItems).filter(item => !item.id.includes('credit')).length;
    if (documentsTotal) {
      documentsTotal.textContent = totalRequiredDocs.toString();
    }
    
    // Function to update progress bar
    function updateDocumentProgress() {
      const selectedDocs = document.querySelectorAll('.document-selected');
      const readyDocs = selectedDocs.length;
      
      if (documentsReady) {
        documentsReady.textContent = readyDocs.toString();
      }
      
      if (progressFill) {
        const progressPercentage = (readyDocs / totalRequiredDocs) * 100;
        progressFill.style.width = `${progressPercentage}%`;
        
        // Change color based on progress
        if (progressPercentage === 100) {
          progressFill.style.backgroundColor = 'hsl(142, 75%, 35%)'; // success color
          
          // Enable application button
          if (applicationButton) {
            applicationButton.classList.add('all-documents-ready');
          }
        } else if (progressPercentage > 50) {
          progressFill.style.backgroundColor = 'hsl(38, 95%, 50%)'; // secondary/warning color
        } else {
          progressFill.style.backgroundColor = 'hsl(210, 85%, 45%)'; // primary color
        }
      }
    }
    
    // Initialize progress
    updateDocumentProgress();
    
    // Toggle document checklist visibility
    checklistToggle.addEventListener('click', function() {
      isExpanded = !isExpanded;
      
      if (isExpanded) {
        documentsSection.classList.add('checklist-expanded');
        this.textContent = 'Hide Checklist';
        
        // Expand document items with animation
        documentItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.height = 'auto';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, index * 100);
        });
      } else {
        documentsSection.classList.remove('checklist-expanded');
        this.textContent = 'View Checklist';
      }
    });
    
    // Add click event to document items
    documentItems.forEach(item => {
      item.addEventListener('click', function() {
        // Toggle selected state
        this.classList.toggle('document-selected');
        
        // Update document status
        const statusElement = this.querySelector('.document-status');
        
        if (this.classList.contains('document-selected')) {
          statusElement.textContent = 'Ready ✓';
          statusElement.style.backgroundColor = 'hsl(142, 75%, 35%)'; // success color
        } else {
          // Reset to original status
          if (this.id === 'doc-credit') {
            statusElement.textContent = 'Automatic';
          } else {
            statusElement.textContent = 'Required';
            statusElement.style.backgroundColor = 'hsl(210, 85%, 25%)'; // primary color
          }
        }
        
        // Update progress bar
        updateDocumentProgress();
      });
      
      // Add tooltip with additional information
      const docInfo = document.createElement('div');
      docInfo.className = 'document-tooltip';
      docInfo.innerHTML = 'Click to mark as ready';
      item.appendChild(docInfo);
      
      item.addEventListener('mouseenter', function() {
        docInfo.style.display = 'block';
        setTimeout(() => {
          docInfo.style.opacity = '1';
        }, 10);
      });
      
      item.addEventListener('mouseleave', function() {
        docInfo.style.opacity = '0';
        setTimeout(() => {
          docInfo.style.display = 'none';
        }, 300);
      });
    });
    
    // Add download checklist button
    const downloadButton = document.createElement('button');
    downloadButton.className = 'download-checklist-button';
    downloadButton.innerHTML = '📥 Download Checklist';
    downloadButton.addEventListener('click', function(e) {
      e.preventDefault();
      generateDocumentChecklist();
    });
    documentsSection.appendChild(downloadButton);
    
    // Function to generate and download document checklist
    function generateDocumentChecklist() {
      // Create a text representation of the checklist
      let checklistContent = "DreamHome Application Document Checklist\n";
      checklistContent += "=============================================\n\n";
      
      // Add current date
      const today = new Date();
      checklistContent += `Generated on: ${today.toLocaleDateString()}\n\n`;
      
      checklistContent += "Required Documents:\n";
      checklistContent += "-------------------\n";
      checklistContent += "[ ] Identification: Government-issued photo ID (driver's license, passport)\n";
      checklistContent += "[ ] Proof of Income: Last 3 months of pay stubs or bank statements\n";
      checklistContent += "[ ] References: Contact information for previous landlords\n";
      checklistContent += "[ ] Credit Report: Will be run automatically during application\n\n";
      
      checklistContent += "Additional Information:\n";
      checklistContent += "----------------------\n";
      checklistContent += "* All documents must be current and valid\n";
      checklistContent += "* Digital copies (clear photos or scans) are acceptable\n";
      checklistContent += "* You can upload these documents during the application process\n";
      checklistContent += "* Please have all documents ready before starting your application\n\n";
      
      checklistContent += "Contact Information:\n";
      checklistContent += "-------------------\n";
      checklistContent += "DreamHome Real Estate\n";
      checklistContent += "123 Real Estate Avenue\n";
      checklistContent += "New York, NY 10001\n";
      checklistContent += "Phone: (555) 123-4567\n";
      checklistContent += "Email: applications@dreamhome.com\n";
      
      // Create a Blob with the content
      const blob = new Blob([checklistContent], { type: 'text/plain' });
      
      // Create a download link
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'DreamHome_Document_Checklist.txt';
      
      // Trigger download
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      // Show success message
      alert('Document checklist downloaded successfully!');
    }
    
    // Update document status for automatic document
    const creditDoc = document.getElementById('doc-credit');
    if (creditDoc) {
      const creditStatus = creditDoc.querySelector('.document-status');
      creditStatus.textContent = 'Automatic';
      creditStatus.classList.add('automatic');
    }
  }
  
  // Features data
  const features = [
    {
      title: 'Fast Processing',
      description: 'Applications are typically processed within 48 hours'
    },
    {
      title: 'Secure',
      description: 'Your data is encrypted and securely stored'
    },
    {
      title: 'No Obligation',
      description: 'Apply to multiple properties with one application'
    }
  ];
  
  // Add feature cards dynamically
  if (featureContainer) {
    features.forEach(feature => {
      const featureCard = document.createElement('div');
      featureCard.className = 'feature-card';
      
      featureCard.innerHTML = `
        <h4 class="feature-title">${feature.title}</h4>
        <p class="feature-description">${feature.description}</p>
      `;
      
      featureContainer.appendChild(featureCard);
    });
  }
  
  // Setup countdown timer - 24 hours from now
  if (countdownElement) {
    // Set the target time to 24 hours from now
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 24);
    
    function updateCountdown() {
      const currentTime = new Date();
      const difference = targetTime - currentTime;
      
      // If the countdown is over
      if (difference <= 0) {
        countdownElement.textContent = "Offer expired!";
        return;
      }
      
      // Calculate hours, minutes, seconds
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      // Display the countdown
      countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    // Update the countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
  
  // Add hover animation to steps
  applicationSteps.forEach((step, index) => {
    step.addEventListener('mouseenter', () => {
      step.style.transform = 'translateX(5px)';
      step.style.transition = 'transform 0.3s ease';
    });
    
    step.addEventListener('mouseleave', () => {
      step.style.transform = 'translateX(0)';
    });
  });
  
  // Add animation to application button every 10 seconds
  setInterval(() => {
    if (applicationButton) {
      applicationButton.classList.add('pulse-animation');
      setTimeout(() => {
        applicationButton.classList.remove('pulse-animation');
      }, 2000);
    }
  }, 10000);
  
  // Handle button click
  if (applicationButton) {
    applicationButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Change button text and style
      const originalText = this.textContent;
      this.textContent = 'Loading Application...';
      this.style.opacity = '0.8';
      
      // Simulate loading and redirect
      setTimeout(() => {
        window.location.href = '/application';
      }, 800);
    });
  }
});
