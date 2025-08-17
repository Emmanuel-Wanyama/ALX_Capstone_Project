document.addEventListener('DOMContentLoaded', () => {
    // This is where you'll make API calls to your backend
    const dashboardEl = document.getElementById('dashboard');
    const transactionForm = document.getElementById('transaction-form');
    const transactionList = document.getElementById('transaction-list');
    const categorySelect = document.getElementById('category');

    // Fetch and display dashboard data
    const fetchDashboardData = async () => {
        try {
            [cite_start]// Your API call to GET /api/dashboard [cite: 7]
            // Example: const response = await fetch('/api/dashboard');
            // const data = await response.json();
            // You will update the summary spans and charts with this data.
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        }
    };

    // Fetch and display transactions
    const fetchTransactions = async () => {
        try {
            [cite_start]// Your API call to GET /api/transactions [cite: 8]
            // Example: const response = await fetch('/api/transactions');
            // const transactions = await response.json();
            // Loop through transactions and append them to transaction-list
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    // Handle form submission
    transactionForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const description = document.getElementById('description').value;
        const amount = document.getElementById('amount').value;
        const type = document.getElementById('type').value;
        const categoryId = document.getElementById('category').value;

        const newTransaction = {
            description,
            amount,
            type,
            category_id: categoryId
        };

        // Your API call to POST /api/transactions
        // Example: await fetch('/api/transactions', { method: 'POST', body: JSON.stringify(newTransaction) });
        // Then, refresh the lists.
    });

    // Initial data fetch
    fetchDashboardData();
    fetchTransactions();
});