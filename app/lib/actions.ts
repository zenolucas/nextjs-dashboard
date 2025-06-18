'use server'; // mark all exported functions within the files as Server Actions.


// extracting the data from formData
export async function createInvoice(formData: FormData) {
    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    };

    console.log(rawFormData)
}