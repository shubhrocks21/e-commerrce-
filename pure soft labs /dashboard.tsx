import { useFetchData } from '../utils/fetchData';
import Card from '../components/Card';
import Chart from '../components/Chart';
import Table from '../components/Table';

export default function Dashboard() {
  const { data, isLoading, error } = useFetchData();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="dashboard">
      <Card title="Card 1" data={data.card1Data} />
      <Chart title="Chart 1" data={data.chart1Data} />
      <Table title="Table 1" data={data.tableData} />
      {/* ... other components */}

      <button onClick={handleDownload}>Download</button>
    </div>
  );

  const handleDownload = async () => {
    try {
      const response = await fetch('https://testd5-img.azurewebsites.net/api/imgdownload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ api: data.api_secret }),
      });

      const base64Image = await response.text();
      // Use a library like file-saver to download the image
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };
}
