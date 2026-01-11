import clsx from 'clsx'

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        // Umumiy klasslar (lekin bu yerda bg-white bo'lmasligi kerak)
        'inline-flex items-center rounded-full px-4 py-1 text-lg', 
        {
          // Agar 'pending' bo'lsa shu klasslar qo'shiladi
          'bg-gray-100 text-black uppercase': status === 'pending',
          // Agar 'paid' bo'lsa shu klasslar qo'shiladi
          'bg-green-500 text-black uppercase': status === 'paid',
        },
      )}
    >
      {status}
    </span>
  )
}