#pragma once

#include <JuceHeader.h>
#include "PluginProcessor.h"
#include "unisonComponent.h"
#include "spectrumAnalyzer.h"
#include "arpeggiatorComponent.h"

class AudioPluginAudioProcessorEditor  : public juce::AudioProcessorEditor

{

public:

    AudioPluginAudioProcessorEditor (AudioPluginAudioProcessor&);

    ~AudioPluginAudioProcessorEditor() override;

    void paint (juce::Graphics&) override;

    void resized() override;

private:

    AudioPluginAudioProcessor& audioProcessor;

    unisonComponent unisonComp;

    spectrumAnalyzer spectrumComp;

    arpeggiatorComponent arpeggiatorComp;

    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (AudioPluginAudioProcessorEditor)

};
