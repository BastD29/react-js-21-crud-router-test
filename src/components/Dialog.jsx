export default function Dialog({ message, onDialog, nameProduct }) {
  return (
    <div
        // onClick={() => onDialog(false)}
    >
        <div
            // onClick={(e) => e.stopPropagation()}
        >
            <h3>{message}</h3>
            <h1>{nameProduct}</h1>
            <div>
                <button
                    onClick={() => onDialog(true)}
                >
                    Yes
                </button>
                <button
                    onClick={() => onDialog(false)}
                >
                    No
                </button>
            </div>
        </div>
    </div>
  )
}
