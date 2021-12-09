import firestore from "./../firebase";

export const getProducts = async () => {
    const collection = firestore.collection("products");
    const queryData = await collection.get();
    const documents = queryData.docs;
    const data = documents.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
};

// Update
export const updateProduct = async (id, record) => {
    const docRef = firestore.collection("products").doc(id);
    await docRef.update(record);
};
