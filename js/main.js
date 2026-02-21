// توابع کمکی عمومی
export const helpers = {
    // تبدیل اعداد فارسی به انگلیسی
    toEnglishNumbers(str) {
        if (!str) return str;
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let result = str;
        for (let i = 0; i < 10; i++) {
            result = result.replace(new RegExp(persianDigits[i], 'g'), englishDigits[i]);
        }
        return result;
    },

    // فرمت کردن اعداد به فارسی
    toPersianNumbers(num) {
        if (num === undefined || num === null) return '';
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return num.toString().replace(/\d/g, d => persianDigits[d]);
    },

    // نمایش Toast
    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 12px 30px;
            border-radius: 50px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: slideDown 0.3s ease;
            font-weight: 500;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    // اعتبارسنجی ایمیل
    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    // اعتبارسنجی موبایل
    isValidMobile(mobile) {
        const re = /^09[0-9]{9}$/;
        return re.test(mobile);
    }
};

// توابع مربوط به پروژه‌ها
export const projectHelpers = {
    // محاسبه پیشرفت پروژه
    calculateProgress(tasks) {
        if (!tasks || tasks.length === 0) return 0;
        const completed = tasks.filter(t => t.completed).length;
        return Math.round((completed / tasks.length) * 100);
    },

    // فرمت کردن بودجه
    formatBudget(amount) {
        if (!amount) return 'نامشخص';
        return amount.toLocaleString('fa-IR') + ' تومان';
    }
};

// توابع مربوط به امتیازدهی
export const ratingHelpers = {
    // ایجاد ستاره‌های امتیاز
    generateStars(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star text-warning"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt text-warning"></i>';
        }
        
        const remaining = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remaining; i++) {
            stars += '<i class="far fa-star text-warning"></i>';
        }
        
        return stars;
    },

    // محاسبه میانگین امتیازات
    calculateAverage(ratings) {
        if (!ratings || ratings.length === 0) return 0;
        const sum = ratings.reduce((acc, r) => acc + r.rating, 0);
        return (sum / ratings.length).toFixed(1);
    }
};