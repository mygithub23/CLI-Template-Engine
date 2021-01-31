
//Generate Employee ID
class IdGen {    
        constructor(start, end) {            
            this.start=start;
            this.end=end;
        }
        range() {
            return Array(this.end - this.start + 1).fill().map((_, idx) => this.start + idx);
          }

        getEmpId() {
            var result = this.range(1, 25);           
            return result;
        }



}

module.exports = IdGen;