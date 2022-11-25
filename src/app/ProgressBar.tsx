import '../style/Task.css';

const WIDTH = 500;

interface Prop {
    fill: number;
}

export function ProgressBar(props: Prop) {
    const red = [255, 50, 50];
    const green = [50, 255, 50];

    // Weighted sum of rgb value
    const mix = red.map((v, i) => v * (1 - props.fill) + green[i] * props.fill);
    return (
        <div className="progress-container">
            <div className="progress-border" style={{
                width: WIDTH + 'px'
            }}>
                <div className="progress-fill" style={{
                    width: props.fill * WIDTH + 'px',
                    backgroundColor: `rgb(${mix.join(',')})`
                }}></div>
            </div>
        </div>
    )
}