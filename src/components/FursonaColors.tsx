"use client";

export default function FursonaColors() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center gap-5 mt-2 mb-2 padding-4">
      <div
        className="w-22 h-12 rounded-3xl color"
        style={{ cursor: "pointer", backgroundColor: "#fa557a" }}
        onClick={(e) => {
          navigator.clipboard.writeText("#fa557a");
          
        }}
      >
        #fa557a
        
      </div>
      <div
        className="w-22 h-12 rounded-3xl color"
        style={{ cursor: "pointer", backgroundColor: "#da2f55" }}
        onClick={(e) => {
          navigator.clipboard.writeText("#da2f55");
          
        }}
      >
        #da2f55
        
      </div>
      <div
        className="w-22 h-12 rounded-3xl color"
        style={{ cursor: "pointer", backgroundColor: "#b8fff1" }}
        onClick={(e) => {
          navigator.clipboard.writeText("#b8fff1");
          
        }}
      >
        #b8fff1
        
      </div>
      <div
        className="w-22 h-12 rounded-3xl color"
        style={{ cursor: "pointer", backgroundColor: "#bdfff2" }}
        onClick={(e) => {
          navigator.clipboard.writeText("#bdfff2");
          
        }}
      >
        #bdfff2
        
      </div>
      <div
        className="w-22 h-12 rounded-3xl color"
        style={{ cursor: "pointer", backgroundColor: "#f3fafa" }}
        onClick={(e) => {
          navigator.clipboard.writeText("#f3fafa");
          
        }}
      >
        #f3fafa
        
      </div>
    </div>
  );
}
