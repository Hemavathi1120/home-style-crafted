// Document Upload Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get all file inputs
  const fileInputs = document.querySelectorAll('.file-input');
  
  // Initialize file upload functionality for each input
  fileInputs.forEach(input => {
    const card = input.closest('.document-card') || input.closest('.document-card-small');
    const uploadButton = card.querySelector('.upload-button') || card.querySelector('.upload-button-small');
    const uploadStatus = card.querySelector('.upload-status');
    
    // Setup file input change event
    input.addEventListener('change', function(e) {
      handleFileSelection(e, uploadStatus, card);
    });
    
    // Setup upload button click event
    uploadButton.addEventListener('click', function() {
      input.click();
    });
    
    // Setup drag and drop events
    setupDragAndDrop(card, input, uploadStatus);
  });
  
  // Add click event for document removal
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-file')) {
      const filePreview = e.target.closest('.file-preview');
      const uploadStatus = filePreview.parentElement;
      const card = uploadStatus.closest('.document-card') || uploadStatus.closest('.document-card-small');
      const input = card.querySelector('.file-input');
      
      // Reset file input and remove preview
      input.value = '';
      filePreview.remove();
      
      // Reset card state
      card.classList.remove('file-uploaded');
      
      // Update progress
      updateApplicationProgress();
    }
  });
  
  // Initialize application progress
  updateApplicationProgress();
});

// Handle file selection
function handleFileSelection(e, uploadStatus, card) {
  const file = e.target.files[0];
  
  if (!file) return;
  
  // Validate file
  const validationResult = validateFile(file);
  
  if (!validationResult.valid) {
    showError(uploadStatus, validationResult.message);
    return;
  }
  
  // Clear previous upload status
  uploadStatus.innerHTML = '';
  
  // Create file preview element
  const filePreview = createFilePreview(file);
  uploadStatus.appendChild(filePreview);
  
  // Show mock upload progress
  simulateFileUpload(uploadStatus, card);
}

// Validate file type and size
function validateFile(file) {
  // Allowed file types
  const allowedTypes = [
    'application/pdf', 
    'image/jpeg', 
    'image/png', 
    'image/jpg',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  
  // Max file size (10MB)
  const maxSize = 10 * 1024 * 1024;
  
  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      message: 'Invalid file type. Please upload PDF, JPEG, PNG, or DOC files.'
    };
  }
  
  if (file.size > maxSize) {
    return {
      valid: false,
      message: 'File is too large. Maximum size is 10MB.'
    };
  }
  
  return { valid: true };
}

// Create file preview element
function createFilePreview(file) {
  const filePreview = document.createElement('div');
  filePreview.className = 'file-preview';
  
  const fileIcon = getFileIcon(file.type);
  const fileSize = formatFileSize(file.size);
  
  filePreview.innerHTML = `
    ${fileIcon}
    <span class="file-name">${file.name}</span>
    <span class="file-size">${fileSize}</span>
    <span class="remove-file">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </span>
  `;
  
  return filePreview;
}

// Get appropriate icon based on file type
function getFileIcon(fileType) {
  let iconPath = '';
  
  if (fileType.includes('pdf')) {
    iconPath = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>';
  } else if (fileType.includes('image')) {
    iconPath = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>';
  } else if (fileType.includes('word') || fileType.includes('document')) {
    iconPath = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>';
  } else {
    iconPath = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>';
  }
  
  return iconPath;
}

// Format file size for display
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Show error message
function showError(uploadStatus, message) {
  uploadStatus.innerHTML = `<div class="upload-error">${message}</div>`;
  
  // Remove error after 4 seconds
  setTimeout(() => {
    const errorElement = uploadStatus.querySelector('.upload-error');
    if (errorElement) {
      errorElement.remove();
    }
  }, 4000);
}

// Simulate file upload process
function simulateFileUpload(uploadStatus, card) {
  // Create progress element
  const progressElement = document.createElement('div');
  progressElement.className = 'upload-progress';
  progressElement.innerHTML = '<div class="progress-bar"></div>';
  uploadStatus.appendChild(progressElement);
  
  const progressBar = progressElement.querySelector('.progress-bar');
  let progress = 0;
  
  // Simulate progress
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = `${progress}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      
      // Remove progress bar after completion
      setTimeout(() => {
        progressElement.remove();
        
        // Add success message
        const successMessage = document.createElement('div');
        successMessage.className = 'upload-success';
        successMessage.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          File uploaded successfully
        `;
        uploadStatus.appendChild(successMessage);
        
        // Add class to card to indicate file uploaded
        card.classList.add('file-uploaded');
        
        // Update application progress
        updateApplicationProgress();
        
        // Remove success message after 3 seconds
        setTimeout(() => {
          successMessage.remove();
        }, 3000);
      }, 500);
    }
  }, 200);
}

// Setup drag and drop functionality
function setupDragAndDrop(card, input, uploadStatus) {
  // Prevent default drag behaviors
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    card.addEventListener(eventName, preventDefaults, false);
  });
  
  // Highlight drop area when item is dragged over it
  ['dragenter', 'dragover'].forEach(eventName => {
    card.addEventListener(eventName, function() {
      card.classList.add('file-drag-over');
    }, false);
  });
  
  // Remove highlight when item is dragged out or dropped
  ['dragleave', 'drop'].forEach(eventName => {
    card.addEventListener(eventName, function() {
      card.classList.remove('file-drag-over');
    }, false);
  });
  
  // Handle file drop
  card.addEventListener('drop', function(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    
    if (files.length > 0) {
      input.files = files;
      handleFileSelection({target: input}, uploadStatus, card);
    }
  }, false);
  
  // Prevent default behavior (open as link for some elements)
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
}

// Track overall upload progress
function updateApplicationProgress() {
  // Get all document cards
  const requiredCards = document.querySelectorAll('.document-grid .document-card');
  const allCards = document.querySelectorAll('.document-card, .document-card-small');
  
  // Count uploaded required documents
  const uploadedRequired = Array.from(requiredCards).filter(card => 
    card.classList.contains('file-uploaded')
  ).length;
  
  // Count all uploaded documents
  const uploadedTotal = Array.from(allCards).filter(card => 
    card.classList.contains('file-uploaded')
  ).length;
  
  // Calculate percentages
  const requiredPercentage = (uploadedRequired / requiredCards.length) * 100;
  const totalPercentage = (uploadedTotal / allCards.length) * 100;
  
  // Update application progress (if progress bar exists)
  const progressBar = document.querySelector('.application-progress-bar');
  if (progressBar) {
    progressBar.style.width = `${requiredPercentage}%`;
  }
  
  // Update progress text (if progress text exists)
  const progressText = document.querySelector('.progress-text');
  if (progressText) {
    progressText.textContent = `${uploadedRequired}/${requiredCards.length} Required Documents`;
  }
}
