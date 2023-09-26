interface Props {
  text: string;
  onClose: () => void;
}

function ProjectAlert({ text, onClose }: Props) {
  return (
    <div className="alert alert-warning alert-dismissible">
      {text}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default ProjectAlert;
