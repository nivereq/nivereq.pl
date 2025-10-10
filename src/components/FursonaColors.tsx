'use client'

export default function FursonaColors() {
    return (
        <div className="colors flex flex-row justify-center gap-5 mt-12 mb-8 padding-5">
            <div className="w-12 h-12 rounded-lg color" style={{ cursor: 'pointer', backgroundColor: '#fa557a' }} onClick={(e) => { navigator.clipboard.writeText('#fa557a'); if(e.target instanceof HTMLElement) e.target.classList.add('clicked'); setTimeout(() => { if(e.target instanceof HTMLElement) e.target.classList.remove('clicked'); }, 500); }}><i className="bi bi-check-lg"></i></div>
            <div className="w-12 h-12 rounded-lg color" style={{ cursor: 'pointer', backgroundColor: '#da2f55' }} onClick={(e) => { navigator.clipboard.writeText('#da2f55'); if(e.target instanceof HTMLElement) e.target.classList.add('clicked'); setTimeout(() => { if(e.target instanceof HTMLElement) e.target.classList.remove('clicked'); }, 500); }}><i className="bi bi-check-lg"></i></div>
            <div className="w-12 h-12 rounded-lg color" style={{ cursor: 'pointer', backgroundColor: '#b8fff1' }} onClick={(e) => { navigator.clipboard.writeText('#b8fff1'); if(e.target instanceof HTMLElement) e.target.classList.add('clicked'); setTimeout(() => { if(e.target instanceof HTMLElement) e.target.classList.remove('clicked'); }, 500); }}><i className="bi bi-check-lg"></i></div>
            <div className="w-12 h-12 rounded-lg color" style={{ cursor: 'pointer', backgroundColor: '#bdfff2' }} onClick={(e) => { navigator.clipboard.writeText('#bdfff2'); if(e.target instanceof HTMLElement) e.target.classList.add('clicked'); setTimeout(() => { if(e.target instanceof HTMLElement) e.target.classList.remove('clicked'); }, 500); }}><i className="bi bi-check-lg"></i></div>
            <div className="w-12 h-12 rounded-lg color" style={{ cursor: 'pointer', backgroundColor: '#f3fafa' }} onClick={(e) => { navigator.clipboard.writeText('#f3fafa'); if(e.target instanceof HTMLElement) e.target.classList.add('clicked'); setTimeout(() => { if(e.target instanceof HTMLElement) e.target.classList.remove('clicked'); }, 500); }}><i className="bi bi-check-lg"></i></div>
        </div>
    )
}