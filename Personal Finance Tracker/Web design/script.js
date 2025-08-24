document.addEventListener('DOMContentLoaded', () => {

    // Sample Data (This would come from your backend API)
    const sampleBudgets = [
        { category: 'Grocery', amount: 400, spent: 100 },
        { category: 'Utilities', amount: 180, spent: 50 },
        { category: 'Rent', amount: 1200, spent: 1200 },
        { category: 'Entertainment', amount: 200, spent: 50 },
    ];

    const sampleExpenses = [
        { expense: 'Grocery', amount: 220, account: 'Savings', date: 'April 25, 2025' },
        { expense: 'Subscriptions', amount: 120, account: 'Savings', date: 'April 22, 2025' },
        { expense: 'Credit Card Payments', amount: 200, account: 'Summit Equity Fund', date: 'April 18, 2025' },
        { expense: 'Electricity', amount: 80, account: 'Checking Account', date: 'April 16, 2025' },
        { expense: 'Rent', amount: 1200, account: 'Riverstone Bank', date: 'April 1, 2025' },
    ];
    
    const sampleIncomes = [
        { income: 'Salary', amount: 3500, account: 'Checking Account', date: 'April 20, 2025' },
        { income: 'Freelance', amount: 500, account: 'Savings', date: 'April 15, 2025' },
        { income: 'Refund', amount: 50, account: 'Checking Account', date: 'April 10, 2025' },
    ];

    const sampleAccounts = [
        { name: 'Checking Account', balance: 1500 },
        { name: 'Savings', balance: 5200 },
        { name: 'Summit Equity Fund', balance: 12000 },
    ];

    const samplePieChartData = {
        labels: ['Grocery', 'Subscriptions', 'Electricity', 'Other'],
        datasets: [{
            data: [220, 120, 80, 150], // Example data based on sample expenses
            backgroundColor: ['#4299e1', '#f6ad55', '#48bb78', '#a0aec0'],
            borderColor: '#ffffff',
            borderWidth: 2,
        }]
    };

    // --- Function to Render UI ---

    const renderBudgets = () => {
        const budgetsListEl = document.getElementById('budgets-list');
        budgetsListEl.innerHTML = '';
        sampleBudgets.forEach(budget => {
            const progress = (budget.spent / budget.amount) * 100;
            const item = document.createElement('div');
            item.className = 'budget-item';
            item.innerHTML = `
                <h3 class="font-medium">${budget.category}</h3>
                <p class="text-sm text-gray-600">$${budget.spent.toFixed(2)} / $${budget.amount.toFixed(2)}</p>
                <div class="budget-progress">
                    <div class="budget-progress-bar" style="width: ${progress > 100 ? 100 : progress}%"></div>
                </div>
                <p class="text-xs mt-1 text-gray-500">${progress.toFixed(0)}% used</p>
            `;
            budgetsListEl.appendChild(item);
        });
    };

    const renderTable = (data, tableBodyId) => {
        const tableBody = document.getElementById(tableBodyId);
        tableBody.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            const values = Object.values(item);
            row.innerHTML = `
                <td>${values[0]}</td>
                <td>$${values[1].toFixed(2)}</td>
                <td>${values[2]}</td>
                <td>${values[3]}</td>
            `;
            tableBody.appendChild(row);
        });
    };

    const renderAccounts = () => {
        const accountsListEl = document.getElementById('accounts-list');
        accountsListEl.innerHTML = '';
        sampleAccounts.forEach(account => {
            const item = document.createElement('li');
            item.innerHTML = `
                <span>🏦</span>
                <div>
                    <p>${account.name}</p>
                    <p class="text-sm text-gray-600">$${account.balance.toFixed(2)}</p>
                </div>
            `;
            accountsListEl.appendChild(item);
        });
    };

    // --- Chart Initialization ---

    const ctx = document.getElementById('expense-pie-chart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: samplePieChartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '80%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10,
                        font: {
                            family: 'Inter',
                            size: 12,
                        }
                    }
                }
            }
        }
    });

    // --- Initial Render ---
    renderBudgets();
    renderTable(sampleExpenses, 'expenses-table-body');
    renderTable(sampleIncomes, 'incomes-table-body');
    renderAccounts();
});
