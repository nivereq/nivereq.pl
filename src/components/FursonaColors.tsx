'use client'

export default function FursonaColors() {
    return (
        <div className="flex flex-row justify-center gap-5">
            <div className="w-16 h-16 rounded-lg color" style={{ cursor: 'pointer', backgroundColor: '#fc5478' }} onClick={(e) => { navigator.clipboard.writeText('#fc5478'); e.target.classList.add('clicked'); setTimeout(() => { e.target.classList.remove('clicked'); }, 500); }}><i class="bi bi-check-lg"></i></div>
            <div className="w-16 h-16 rounded-lg color" style={{ cursor: 'pointer', backgroundColor: '#b2fdef' }} onClick={(e) => { navigator.clipboard.writeText('#b2fdef'); e.target.classList.add('clicked'); setTimeout(() => { e.target.classList.remove('clicked'); }, 500); }}><i class="bi bi-check-lg"></i></div>
            <div className="w-16 h-16 rounded-lg color" style={{ cursor: 'pointer', backgroundColor: '#e2faf6' }} onClick={(e) => { navigator.clipboard.writeText('#e2faf6'); e.target.classList.add('clicked'); setTimeout(() => { e.target.classList.remove('clicked'); }, 500); }}><i class="bi bi-check-lg"></i></div>
            <div className="w-16 h-16 rounded-lg color" style={{ cursor: 'pointer', backgroundColor: '#f3fafa' }} onClick={(e) => { navigator.clipboard.writeText('#f3fafa'); e.target.classList.add('clicked'); setTimeout(() => { e.target.classList.remove('clicked'); }, 500); }}><i class="bi bi-check-lg"></i></div>
        </div>
    )
}