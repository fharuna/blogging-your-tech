const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
    const body1 = document.querySelector('textarea[name="post-body"]').value;
    const body2 = document.querySelector('textarea[name="post-body"]').value;
    const body3 = document.querySelector('textarea[name="post-body"]').value;
  
  
    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        body1,
        body2,
        body3,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);