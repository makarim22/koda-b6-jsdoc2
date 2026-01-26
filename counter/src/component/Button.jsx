
/**
 * Komponen CustomButton sederhana yang merender tombol berbeda
 * berdasarkan prop 'type'.
 *
 * @param {object} props - Properti untuk komponen tombol.
 * @param {'add' | 'substract'} props.type - Jenis tombol yang akan dirender.
 * @param {function} props.onClick - Fungsi yang akan dipanggil saat tombol diklik.
 * @param {boolean} [props.disabled=false] - Menonaktifkan tombol jika true.
 * @param {string} [props.className] - Kelas CSS tambahan yang bisa ditambahkan.
 * @param {object} [otherProps] - Properti HTML <button> standar lainnya.
 */
const CustomButton = ({ type, onClick, disabled = false, className, ...otherProps }) => {

    if (type === 'add') {
        return (
            <button
                type="button"
                className={`btn btn-primary ${className || ''} bg-blue` } 
                onClick={onClick}
                disabled={disabled}
                {...otherProps} 
            >
                Add
            </button>
        );
    } else if (type === 'substract') { 
        return (
            <button
                type="button"
                className={`btn btn-secondary ${className || ''}`} 
                onClick={onClick}
                disabled={disabled}
                {...otherProps} 
            >
                Subtract
            </button>
        );
    } else {
        console.warn("CustomButton: Invalid 'type' prop provided. Rendering default button.");
        return (
             <button
                type="button"
                className={`btn btn-info ${className || ''}`} 
                onClick={onClick}
                disabled={disabled}
                {...otherProps}
            >
                Default Button
            </button>
        );
    }
};

export default CustomButton;