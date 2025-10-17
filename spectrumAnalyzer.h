#pragma once

#include <JuceHeader.h>

class spectrumAnalyzer : public juce::Component

{

public:

    spectrumAnalyzer();

    ~spectrumAnalyzer() override;

    void paint (juce::Graphics&) override;

    void resized() override;

private:

    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (spectrumAnalyzer)

};
