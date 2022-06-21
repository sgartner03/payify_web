export interface Item {
    /*
    Id       int     `json:"id"`
	Name     string  `json:"name"`
	Price    float32 `json:"price"`
	Amount   float32 `json:"amount"`
	Unit     string  `json:"unit"`
	Username string  `json:"username"`
    */
   id: number;
   name?: string;
   price?: number;
   amount?: number;
   unit?: string
}