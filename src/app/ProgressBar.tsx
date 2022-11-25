import '../style/Task.css';

const WIDTH = 500;

interface Prop {
    fill: number;
}

export function ProgressBar(props: Prop) {
    const red = 0;
    const green = 160;

    const mix = red * (1 - props.fill) + green * props.fill
    return (
        <div className="progress-container">
            <div className="progress-border" style={{
                width: WIDTH + 'px'
            }}>
                <div className="progress-fill" style={{
                    width: props.fill * WIDTH + 'px',
                    backgroundColor: `hsl(${mix}, 100%, 50%)`
                }}></div>
            </div>
        </div>
    )
}