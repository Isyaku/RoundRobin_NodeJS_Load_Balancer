REQUESTS=10
URL="http://localhost:3000"
for ((i=1; i<=REQUESTS; i++)); do
    curl $URL &
done

wait
echo "All requets have been sent."