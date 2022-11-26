import '../style/Progress.css';

const WIDTH = 30

interface Prop {
    fill: number
}

export function ProgressBar(props: Prop) {
    const isMobile = window.innerWidth < 550
    const red = 0
    const green = 160
    const mix = red * (1 - props.fill) + green * props.fill

    const borderWidth = isMobile? '100%' : WIDTH + 'em'
    const fillWidth = isMobile? props.fill * 100 + '%' : props.fill * WIDTH + 'em'

    return (
        <div className="progress-container">
            <div className="progress-border" style={{
                width: borderWidth 
            }}>
                <div className="progress-fill" style={{
                    width: fillWidth,
                    backgroundColor: `hsl(${mix}, 100%, 50%)`
                }}></div>
            </div>
        </div>
    )
}