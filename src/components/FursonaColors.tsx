'use client'

export default function FursonaColors() {
    return (
        <div className="flex flex-row justify-center gap-5">
            <div className="w-16 h-16 rounded-lg color" style={{ cursor: 'pointer', backgroundColor: '#fc5478' }} onClick={(e) => { navigator.clipboard.writeText('#fc5478'); if(e.target instanceof HTMLElement) e.target.classList.add('clicked'); setTimeout(() => { if(e.target instanceof HTMLElement) e.target.classList.remove('clicked'); }, 500); }}><i className="bi bi-check-lg"></i></div>
            <div className="w-16 h-16 rounded-lg color" style={{ cursor: 'pointer', backgroundColor: '#b2fdef' }} onClick={(e) => { navigator.clipboard.writeText('#b2fdef'); if(e.target instanceof HTMLElement) e.target.classList.add('clicked'); setTimeout(() => { if(e.target instanceof HTMLElement) e.target.classList.remove('clicked'); }, 500); }}><i className="bi bi-check-lg"></i></div>
            <div className="w-16 h-16 rounded-lg color" style={{ cursor: 'pointer', backgroundColor: '#e2faf6' }} onClick={(e) => { navigator.clipboard.writeText('#e2faf6'); if(e.target instanceof HTMLElement) e.target.classList.add('clicked'); setTimeout(() => { if(e.target instanceof HTMLElement) e.target.classList.remove('clicked'); }, 500); }}><i className="bi bi-check-lg"></i></div>
            <div className="w-16 h-16 rounded-lg color" style={{ cursor: 'pointer', backgroundColor: '#f3fafa' }} onClick={(e) => { navigator.clipboard.writeText('#f3fafa'); if(e.target instanceof HTMLElement) e.target.classList.add('clicked'); setTimeout(() => { if(e.target instanceof HTMLElement) e.target.classList.remove('clicked'); }, 500); }}><i className="bi bi-check-lg"></i></div>
        </div>
    )
}