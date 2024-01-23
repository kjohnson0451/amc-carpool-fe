import Button from "@ui/Button"

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div>
      <div className="w-[300px] space-y-12">
        <div className="border-b border-gray-100/10 pb-8">
          <h2 className="text-base font-semibold leading-7 text-gray-100">
            Delete {resourceName}
          </h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4">
            <p>
              Are you sure you want to delete this {resourceName} permanently?
              This action cannot be undone.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button
          type="button"
          className="bg-transparent"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button type="button" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default ConfirmDelete
