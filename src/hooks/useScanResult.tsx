import { useEffect } from "react";
const useScanResult = (data: string, scanning: boolean) => {
  useEffect(() => {
    console.log("Scanned Data:------", data);
    if (data !== "No result" && !scanning) {
       const sendItemId = async () =>{
        try {
          const response = await fetch('http://localhost:4000/api/wishlist/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ itemId: data}),
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          console.log('Item added to wishlist:', result);
        } catch (error) {
          console.error('Error adding item to wishlist:', error);
        }
       }
       sendItemId();
    }
  },[data, scanning]);

}
export default useScanResult;