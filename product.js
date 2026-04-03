var sidenav=document.querySelector(".side-navbar")
function shownavbar()
{
    sidenav.style.left="0"
}
function closenavbar()
{
    sidenav.style.left="-100%"
}
// Redirect to checkout page with product details
        function redirectToCheckout(productName, productPrice, buttonElement) {
            // Setup order summary
            document.getElementById('order-summary').innerHTML = `
                <tr>
                    <td width="150">
                        <img src="${event.target.closest('.product-card').querySelector('img').src}" 
                             class="img-thumbnail" alt="${productName}">
                    </td>
                    <td>
                        <h5>${productName}</h5>
                        
                    </td>
                    <td class="text-end">
                        <div class="fw-bold">₹${productPrice.toLocaleString()}</div>
                    </td>
                </tr>
            `;
            document.getElementById('order-total').innerHTML = `₹${productPrice.toLocaleString()}`;
            
            // Show checkout page and hide product page
            document.getElementById('product-page').style.display = 'none';
            document.getElementById('checkout-page').style.display = 'block';
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
        
        // Handle form submission
        document.getElementById('checkout-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Purchase successful! Thank you for your order.');
            
            // Here you would typically submit the form data to your backend
            // For this demo, we'll just show the alert
            
            // Reset form and return to products
            this.reset();
            document.getElementById('product-page').style.display = 'block';
            document.getElementById('checkout-page').style.display = 'none';
        });
        
        // Toggle payment methods visibility
        document.getElementById('onlinePayment').addEventListener('change', function() {
            document.getElementById('onlinePaymentMethods').style.display = this.checked ? 'block' : 'none';
        });
        
        document.getElementById('cod').addEventListener('change', function() {
            document.getElementById('onlinePaymentMethods').style.display = this.checked ? 'none' : 'block';
        });