/**
 * creating a simple rate limiter with token bucket algorithm
 * 
 */
export default async function takeToken(key,options){
    const now = Date.now();
    const oldState = await db.getRateLimitState(key);
    const newState = take(oldState,options,now);
    await db.replaceRateLimitStatea(key,newState,oldState);
    if(newState.timeStamp - now >0){
        await newPromise(r=> setTimeout(r,newState.timeStamp-now));
    }
}

function take(oldState,options,now){
    const {tokenCount,timeStamp} = oldState? update(oldState,options,now):{tokenCount: options.bucketCapacity,timeStamp:now};
    if(tokenCount>0 && now>= timeStamp){
        return {tokenCount: tokenCount-1, timeStamp};
    }
    else{
        return {tokenCount,timeStamp: timeStamp+ options.interval}
    }
}

function update({tokenCount,timeStamp},{interval,bucketCapacity},now){
    const increase = Math.floor(now-timeStamp)/interval;
    const newTokenCount = Math.min(tokenCount+ increase,bucketCapacity);
    const newTimeStamp = newTokenCount< bucketCapacity? timeStamp+interval*increase:now;
    return{tokenCount: newTokenCount,timeStamp: newTimeStamp};
}
