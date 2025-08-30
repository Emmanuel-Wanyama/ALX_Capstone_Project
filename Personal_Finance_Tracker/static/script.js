document.addEventListener('DOMContentLoaded', () => {

    // Sample Data 
    const sampleBudgets = [
        { category: 'Grocery', amount: 400, spent: 100 },
        { category: 'Utilities', amount: 180, spent: 50 },
        { category: 'Rent', amount: 1200, spent: 1200 },
        { category: 'Entertainment', amount: 200, spent: 50 },
    ];

    const sampleExpenses = [
        { expense: 'Grocery', amount: 220, account: 'Savings', date: 'April 25, 2025' },
        { expense: 'Subscriptions', amount: 120, account: 'Savings', date: 'April 22, 2025' },
        { expense: 'Electricity', amount: 80, account: 'Checking Account', date: 'April 16, 2025' },
        { expense: 'Rent', amount: 1200, account: 'Riverstone Bank', date: 'April 1, 2025' },
    ];
    
    const sampleIncomes = [
        { income: 'Salary', amount: 3500, account: 'Checking Account', date: 'April 20, 2025' },
        { income: 'Freelance', amount: 800, account: 'Savings', date: 'April 10, 2025' },
    ];

    const sampleAccounts = [
        { name: 'Checking Account', balance: 5200 },
        { name: 'Savings Account', balance: 15500 },
        { name: 'Investment Fund', balance: 35000 },
    ];

    const samplePieChartData = {
        labels: ['Groceries', 'Utilities', 'Rent', 'Entertainment', 'Others'],
        datasets: [{
            data: [220, 80, 1200, 50, 150],
            backgroundColor: [
                '#4c51bf',
                '#667eea',
                '#805ad5',
                '#d53f8c',
                '#a0aec0'
            ],
            hoverOffset: 4
        }]
    };

    // --- Dynamic Rendering Functions ---

    const renderBudgets = () => {
        const budgetsListEl = document.getElementById('budgets-list');
        budgetsListEl.innerHTML = '';
        sampleBudgets.forEach(budget => {
            const spentPercentage = (budget.spent / budget.amount) * 100;
            const item = document.createElement('div');
            item.className = 'budget-item';
            item.innerHTML = `
                <div class="flex justify-between items-center">
                    <p class="font-medium">${budget.category}</p>
                    <p class="text-sm text-gray-600">Kes.${budget.spent} of Kes.${budget.amount}</p>
                </div>
                <div class="budget-progress">
                    <div class="budget-progress-bar" style="width: ${spentPercentage}%; background-color: ${spentPercentage >= 100 ? '#e53e3e' : '#48bb78'};"></div>
                </div>
            `;
            budgetsListEl.appendChild(item);
        });
    };

    const renderTable = (data, tableId) => {
        const tableBodyEl = document.getElementById(tableId);
        tableBodyEl.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.expense || item.income}</td>
                <td>$${item.amount.toFixed(2)}</td>
                <td>${item.account}</td>
                <td>${item.date}</td>
            `;
            tableBodyEl.appendChild(row);
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
                    <p class="text-sm text-gray-600">Kes.${account.balance.toFixed(2)}</p>
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

    // --- Notification Function ---
    const notificationBar = document.getElementById('notification-bar');
    let notificationTimeout;

    const showNotification = (message) => {
        // Clear any existing timeout
        clearTimeout(notificationTimeout);
        
        notificationBar.textContent = message;
        notificationBar.classList.add('visible');
        
        // Hide the notification after 3 seconds
        notificationTimeout = setTimeout(() => {
            notificationBar.classList.remove('visible');
        }, 3000);
    };

    // --- Initial Render ---
    renderBudgets();
    renderTable(sampleExpenses, 'expenses-table-body');
    renderTable(sampleIncomes, 'incomes-table-body');
    renderAccounts();

    // --- Add event listeners for Quick Actions ---
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const action = event.target.textContent.trim().replace('➕', '').replace('➖', '').replace('🔁', '').replace('🏦', '').replace('🔖', '').trim();
            const message = `${action} created!`;
            showNotification(message);
        });
    });
});
