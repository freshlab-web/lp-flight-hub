interface VideoSectionProps {
  videoUrl: string;
  overlayTitle: string;
  caption: string;
  fullWidth?: boolean;
}

const VideoSection = ({ videoUrl, overlayTitle, caption, fullWidth = true }: VideoSectionProps) => {
  return (
    <section className={`relative ${fullWidth ? 'py-0' : 'py-24 bg-background'}`}>
      {fullWidth ? (
        <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-secondary/40" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-2xl space-y-4 animate-fade-in">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {overlayTitle}
                </h2>
                <p className="text-lg lg:text-xl text-white/90">
                  {caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl tech-border">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {overlayTitle}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
