// Function to reset all tabs' appearance
function resetTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
      button.classList.remove('border-pink-500', 'text-pink-500');
      button.classList.add('text-gray-500');
    });
  }
  
  // Function to hide all tab contents
  function hideTabContents() {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
      content.classList.add('hidden');
    });
  }
  
  // Function to show the clicked tab's content
  function showTabContent(contentId) {
    const content = document.getElementById(contentId);
    if (content) {
      content.classList.remove('hidden');
    }
  }
  
  // Event listeners for tab buttons
  document.getElementById('cycle-phases-tab').addEventListener('click', function() {
    resetTabs();
    hideTabContents();
    this.classList.add('border-pink-500', 'text-pink-500');
    showTabContent('cycle-phases-content');
  });
  
  document.getElementById('common-symptoms-tab').addEventListener('click', function() {
    resetTabs();
    hideTabContents();
    this.classList.add('border-pink-500', 'text-pink-500');
    showTabContent('common-symptoms-content');
  });
  
  document.getElementById('nutrition-tips-tab').addEventListener('click', function() {
    resetTabs();
    hideTabContents();
    this.classList.add('border-pink-500', 'text-pink-500');
    showTabContent('nutrition-tips-content');
  });
  
  document.getElementById('myths-facts-tab').addEventListener('click', function() {
    resetTabs();
    hideTabContents();
    this.classList.add('border-pink-500', 'text-pink-500');
    showTabContent('myths-facts-content');
  });
  
  // New event listener for "Expert Consultation" tab
  document.getElementById('expert-consultation-tab').addEventListener('click', function() {
    resetTabs();
    hideTabContents();
    this.classList.add('border-pink-500', 'text-pink-500');
    showTabContent('expert-consultation-content');
  });
  