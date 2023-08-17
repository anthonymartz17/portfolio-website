import { db, storage } from "../firebaseConfig";
import {
	collection,
	doc,
	getDoc,
	getDocs,
	addDoc,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";
import {
	ref,
	getDownloadURL,
	getMetadata,
	uploadBytes,
	deleteObject,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
// Create a reference to the storage service
// const storage = getStorage();

//initialize service
// const db = getFirestore();

export default {
	async getPosts() {
		try {
			let data = [];
			const colRef = collection(db, "blogPosts");
			const snapshot = await getDocs(colRef);
			snapshot.docs.forEach((doc) => {
				data.push({
					id: doc.id,
					...doc.data(),
				});
			});

			return data;
		} catch (error) {
			throw error;
		}
	},
	async getPostById(postId) {
		try {
			const postDocRef = doc(db, "blogPosts", postId);

			const postDocSnapshot = await getDoc(postDocRef);

			if (postDocSnapshot.exists()) {
				return {
					id: postDocSnapshot.id,
					...postDocSnapshot.data(),
				};
			} else {
				throw new Error("Post not found.");
			}
		} catch (error) {
			throw error;
		}
	},
	async createPost(postData) {
		try {
			const colRef = collection(db, "blogPosts");

			const response = await addDoc(colRef, postData);

			return response;

			// return profile
		} catch (error) {
			throw error;
		}
	},
	async updatePost(postData) {
		try {
			const postDocRef = doc(db, "blogPosts", postData.id);

			const postDocSnapshot = await getDoc(postDocRef);

			if (postDocSnapshot.exists()) {
				delete postData.id;
				await updateDoc(postDocRef, postData);
				return { id: postDocSnapshot.id, ...postDocSnapshot.data() };
			} else {
				throw new Error("Post not found.");
			}
		} catch (error) {
			throw error;
		}
	},
	async updatePostVisibility({ postId, isPublic }) {
		try {
			const postDocRef = doc(db, "blogPosts", postId);

			const postDocSnapshot = await getDoc(postDocRef);

			if (postDocSnapshot.exists()) {
				await updateDoc(postDocRef, { isPublic: isPublic });
				const updatedPost = {
					id: postDocSnapshot.id,
					...postDocSnapshot.data(),
				};
				//updating isPublic to immediately reflect change locally, since data updates after page reload or route change.
				updatedPost.isPublic = !updatedPost.isPublic;
				return updatedPost;
			} else {
				throw new Error("Post not found.");
			}
		} catch (error) {
			throw error;
		}
	},

	async deletePost(postId) {
		try {
			const postDocRef = doc(db, "blogPosts", postId);

			const postDocSnapshot = await getDoc(postDocRef);

			if (postDocSnapshot.exists()) {
				await deleteDoc(postDocRef);
				return { success: true, message: "post deleted successfully." };
			} else {
				throw new Error("Car not found.");
			}
		} catch (error) {
			throw error;
		}
	},

	async uploadImage(thumbnail) {
		try {
			//creates unique name id for image
			const uniqueId = uuidv4();
			const imageName = `blogThumbnails/${uniqueId}.jpg`;

			//creates refference unique for image
			const storageRef = ref(storage, imageName);

			//uploads image to firebase
			await uploadBytes(storageRef, thumbnail);
			return imageName;
		} catch (error) {
			throw error;
		}
	},

	async deleteThumbnail(imagePath) {
		try {
			const imageRef = ref(storage, imagePath);
			await deleteObject(imageRef);
			return { success: true, message: "Images deleted successfully." };
		} catch (error) {
			throw error;
		}
	},
	async getThumbnail(imagePath) {
		if (imagePath)
			try {
				const imageRef = ref(storage, imagePath);
				const imageUrl = await getDownloadURL(imageRef);
				// Get the metadata of the image
				const metadata = await getMetadata(imageRef);

				// Extract the name, type, and size from the metadata
				const name = metadata.name;
				const type = metadata.contentType;
				const size = metadata.size;

				return {
					dataURL: imageUrl,
					name: name,
					type: type,
					size: size,
				};
			} catch (error) {
				throw error;
			}
	},
};
