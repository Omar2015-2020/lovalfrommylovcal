
const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 flex items-center justify-center gap-1">
        <div className="h-1 w-12 bg-russia-blue rounded"></div>
        <div className="h-1 w-4 bg-yemen-red rounded"></div>
        <div className="h-1 w-12 bg-russia-blue rounded"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
