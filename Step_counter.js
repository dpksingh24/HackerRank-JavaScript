const counter = (
    function counter() {
        let value = 0;
        return {
            getValue: function() {
                return value;
            },
            changeBy: function (k) {
                value += k;
            }
        }
    }
)();

function getFixedCounter(k) {
    let count = counter;
    return {
        decrement: () => {
            count.changeBy(-k);
        },
         increment: () => {
            count.changeBy(k);
        },
        getValue: () => {
            return count.getValue();
        }
    }
}

console.log(counter.getValue());
counter.changeBy(10);
counter.changeBy(20);
console.log(counter.getValue());
