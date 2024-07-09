/**
 * link: https://leetcode.com/problems/time-based-key-value-store/description/?envType=study-plan-v2&envId=binary-search
 **/ 

class TimeMap {
    private nums : {key: string, value: string, timestamp: number}[];
    constructor() {
        this.nums = [];
    }

    set(key: string, value: string, timestamp: number): void {
        this.nums.push({
            key,
            value, 
            timestamp
        })
    }

    get(key: string, timestamp: number): string {
        let left = 0;
        let right = this.nums.length -1 ;
        let isFound = false;
        while(left<= right){
            if(this.nums[left].key != key ){
                left++;
                continue;
            }
            if(this.nums[right].key != key){
                right--;
                continue;
            }
            let mid = Math.floor((left+right)/2);
            if(this.nums[mid].timestamp == timestamp && this.nums[mid].key == key){
                left == mid;
                isFound = true;
                break;
            }
            else if (this.nums[mid].timestamp > timestamp){
                right = mid-1;
            }
            else {
                left = mid+1;
            }
        }
        if(!isFound){
            left = left-1;
        }
        return this.nums[left]?.key == key ? this.nums[left]?.value : '';
    }
}
/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
