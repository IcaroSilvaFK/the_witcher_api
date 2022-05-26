export interface ICloudinaryProps {
  resources: [
    {
      filename: string;
      format: string;
      create_at: string;
      width: number;
      height: number;
      secure_url: string;
    }
  ];
}
